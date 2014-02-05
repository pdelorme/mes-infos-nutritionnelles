var Request = require('request');
var JsonRequest = require('request-json');
var FormData = require('form-data');
var QueryString = require('query-string');
var Batch = require('batch');
var FoodFact = require('../models/foodfact');
var ReceiptStat = require('../models/receiptstat');
var openFoodFactsClient = JsonRequest.newClient('http://fr.openfoodfacts.org/');
var fs = require('fs');
var debug=false;

module.exports.cleanDatabase = function(req, res) {
	cleanDatabase(function(){
		cleanAllStats(function(){
			res.send(200, "OK");
		});
	});
};

/**
 * Force check of openfoodfacts
 */
module.exports.buildDatabase = function(req, res) {
	updateAllFoodfacts(new Date(),
		function(){
			res.send(200, "OK");
		}
	);
};

/**
 * reconstruits les stats.
 */
module.exports.buildAllStats = function(req, res){
	buildAllStats(function(err){
		res.send(200, "OK");
	});
};

/**
 * construits des fausses donnés.
 */
module.exports.generateDummyData = function(req, res){
	generateDummyData(function(err){
		buildAllStats(function(err){
			res.send(200, "OK");
		});
	});
};

/**
 * retourne les stats nutritionelles.
 */
module.exports.receiptStats = function(req, res){
	buildAllStats(function(err){
		getReceiptStats(function(receiptStats){
			res.send(200, receiptStats);
		});
	});
};

/**
 * Retourne la liste des produits invalides. i.e. dont toutes les données n'ont pas été saisies.
 * Vérifie d'abord qu'aucun nouveau produit n'à été entré dans OpenFoodFact depuis 24H
 */
module.exports.invalidProducts = function(req, res) {
	updateAllFoodfacts(yesterday(),
		function(){
			getInvalidProducts(function(products){
			    res.send(200, products);
			});
		}
	);
};

module.exports.postFoodfacts = function(req, res) {
	postFoodfacts(req.body, function(err){
		var returnCode = 200;
		if(err)
			returnCode = 418;
		res.send(returnCode,"OK");
//		getInvalidProducts(function(products){
//			res.send(returnCode, products);
//		});
	});
};

module.exports.dayFacts = function(req, res) {
	dayFacts(new Date(req.query.day), function(products){
	    res.send(200, products);
	});
};

module.exports.testUpdate = function(req, res){
	var product = {
			barcode : '3228021950129',
			label : 'test'
	};
	updateFoodfact(product, new Date(), function(){
		res.send(200);
	});
};


module.exports.test = function(req, res){
	var product = {
			barcode : '03073780969000',
			name : 'KIRI GOUTER 280G 8 PORTIONS - TEST IMAGE',
			energy: 500,
			energy_unit: "kJ",
			fat: 731,
			fat_unit: "g",
			proteins: 907,
			proteins_unit: "g",
			carbohydrates: 533,
			carbohydrates_unit: "g",
			weight: 282
	};
	postOpenFoodFact(product, function(offResp){
		res.send(offResp);
	});
//	postOpenFoodFactImage(product.barcode,function(err){
//		res.send("OK:"+err);
//	});
};
/**
 * deletes all data related to the application.
 * @param done
 */
function cleanDatabase(done){
	console.log("cleaning database");
	FoodFact.truncate(function(err, stats) {
	    if(err != null) {
	      console.log("error : ", err);
	    }
	    done();
	});
//	FoodFact.all(function(err, foodfacts) {
//	    if(err != null) {
//	      console.log("error : ", err);
//	      return;
//	    }
//	    var batch = new Batch;
//	    batch.concurrency(10);
//	    for (idx in foodfacts) {
//	    	foodfact = foodfacts[idx];
//	    	(function(foodfact){
//		    	batch.push(function(done) { 
//		    		foodfact.destroy(function(){
//		    			done();
//		    		});
//		    	});
//	    	})(foodfact);
//	    }
//	    batch.end(function(err, users){
//	    	console.log("cleanDatabase finished");
//	    	done();
//	    });
//	});
}

/**
 * cleans all stats.
 * retuns only when done.
 * @returns
 */
function cleanAllStats(done){
	console.log("cleaning all stats");
	ReceiptStat.truncate(function(err, stats) {
	    if(err != null) {
	      console.log("error : ", err);
	    }
	    done();
	});
//	ReceiptStat.all(function(err, stats) {
//	    if(err != null) {
//	      console.log("error : ", err);
//	      return;
//	    }
//	    var batch = new Batch;
//	    batch.concurrency(10);
//	    for (idx in stats) {
//	    	var stat = stats[idx];
//	    	batch.push(function(done) { 
//	    		stat.destroy(done); 
//	    	});
//	    }
//	    batch.end(function(err, users){
//	    	if(err)
//	    		console.log(err);
//	    	console.log("cleanAllStats finished");
//	    	done();
//	    });
//	});
}
/**
 * itère sur tous les articles de ticket de caisse et questionne OpenFoodFacts pour les info nutritionnelles.
 * les infos sont stockées localement pour éviter de surcharger openfoodfacts et améliorer les performances.
 * @param timefloor est la date en dessus de laquelle les données ne sont pas updaté.
 * @param done : callback when over.
 */
function updateAllFoodfacts(timefloor, done){
	if(!timefloor)
	  timefloor = new Date();
	ReceiptDetail.all(function(err, products) {
	    if(err != null) {
	      console.log("error : ", err);
	      return;
	    }
	    var batch = new Batch;
	    batch.concurrency(1); // la concurency pourra etre augmenté quand la vue product sera fonctionnelle.
	    
	    for (idx in products) {
	        product = products[idx];
	        (function(product){
		        batch.push(function(done){
			        updateFoodfact(product, timefloor, done);		        
			    });
		    })(product);
	    }
	    
	    batch.end(function(err, users){
	    	if(err)
	    		console.log(err);
	    	console.log("buildNutritionalData finished");
	    	done();
	    });
	  });
}

/**
 * itère sur toutes les lignes de caisse et crée des stats bidons.
 * @param done
 */
function generateDummyData(done){
	cleanDatabase(function(){
		console.log("genering dummy data");
		ReceiptDetail.all(function(err, products) {
			console.log("going though tickets");
		    var batch = new Batch;
		    batch.concurrency(1); // la concurency pourra etre augmenté quand la vue product sera fonctionnelle.
			for (idx in products) {
		        product = products[idx];
		        (function(product){
			        batch.push(function(done){
			        	FoodFact.byBarcode(product.barcode,function(err,foodfact) {
			        		if(foodfact && foodfact.size>0)
								return done();
					        foodfact = {
								shop_label : product.label,
								barcode : ""+product.barcode,
								last_update: new Date(),
								energy : Math.random()*1000,
								energy_unit : 'Kj',
								// fat
								fat : Math.random()*500,
								fat_unit: 'g',
								// proteins
								proteins : Math.random()*200,
								proteins_unit: 'g',
								// carbohydrates
								carbohydrates : Math.random()*100,
								carbohydrates_unit: 'g'
							};
			        		// console.log("creating "+foodfact);
					        FoodFact.create(foodfact, function(err, foodfact) {
					        	return done();
							});
						});        
				    });
			    })(product);
		        
			};
			batch.end(function(err, users){
		    	if(err)
		    		console.log(err);
		    	console.log("generation finished");
		    	done();
		    });
		});
	});
}
/**
 * récupère les informations nutritionnelles lié au code bare depuis openfoodfacts si nécéssaire 
 * et sauve les en cache.
 * @param timefloor seul les données mises à jour AVANT le timefloor sont updaté.
 * "http://fr.openfoodfacts.org/api/v0/produit/"+ barcode +".json"
 */
function updateFoodfact(product, timefloor, done){
	// vérifie si elle sont présentes en base.
	FoodFact.byBarcode(product.barcode,function(err,foodfact) {
		if(foodfact) {
			if(foodfact.length>0)
				foodfact=foodfact[0];
			else 
				foodfact = undefined;
		}
		if(foodfact && foodfact.last_update && foodfact.last_update.getTime()>=timefloor.getTime()) {
			return done();
		}	
		// si non présentes : récupérer depuis openfood facts.
		openFoodFactsClient.get("api/v0/produit/"+ product.barcode +".json", function(err, res, body){
			if(err){
				console.log("unexpected error :",err);
				return done();
			}
			var create = false;
			if(!foodfact || !foodfact.barcode){
				create=true;
				foodfact = {
					shop_label : product.label,
					barcode : ""+product.barcode,
				};
			}
			
			foodfact.last_update= new Date(); // heure actuelle.
			
			if(body.status!=0){
				foodfact.name = body.product.product_name;
				if(body.product.nutriments){
					// energy
					foodfact.energy = body.product.nutriments.energy;
					foodfact.energy_unit = body.product.nutriments.energy_unit;
					// fat
					foodfact.fat = body.product.nutriments.fat;
					foodfact.fat_unit = body.product.nutriments.fat_unit;
					// proteins
					foodfact.proteins = body.product.nutriments.proteins;
					foodfact.proteins_unit = body.product.nutriments.proteins_unit;
					// carbohydrates
					foodfact.carbohydrates = body.product.nutriments.carbohydrates;
					foodfact.carbohydrates_unit = body.product.nutriments.carbohydrates_unit;
					// foodfact.nutriments = body.product.nutriments;
				}
			}			
			
			if(debug)
				console.log(">>",product.barcode,":",foodfact);
			if(create){
				FoodFact.create(foodfact, function(err, foodfact) {
			       return done(err);
				});
			} else {
				foodfact.save(function(err,foodfact){
				    return done(err);
				});
			}
		});
	});
}

/**
 * Itère sur tous les tickets de caisses et totalise les nutiments tickets par tickets.
 * 1/ nettoie toutes les stats.
 * 2/ itère sur les tickets.
 * 3/ itère sur les produits
 * 4/ stocke dans le ticket.
 */
function buildAllStats(done){
	// 1/ clear all stats data.
	cleanAllStats(function(){
		// 2/ build stats.
		console.log("building all stats");
		Receipt.all(function(err, allReceipt) {
		    if(err != null) {
		      console.log("error : ", err);
		      return done("error");
		    }
		    var batch = new Batch;
		    batch.concurrency(5);

		    for (idx in allReceipt) {
		        var receipt = allReceipt[idx];
		        //console.log("pushing ",receipt.receiptId);
		        (function(receipt){
			        batch.push(function(done2){
			        	//console.log("pulling ",receipt.receiptId);
			        	buildReceiptStat(receipt, done2);
			        });
		        })(receipt);
		    }
		    
		    batch.end(function(err, users){
		    	if(err)
		    		console.log(err);
		    	console.log("buildNutritionalData finished");
		    	if(done)
		    		done();
		    });
		  });
	});
}

/**
 * Construit les stats pour ce tickets.
 * 1/ itère sur les produits du ticket
 * 2/ stock dans le ticket
 * @param receipt
 */
function buildReceiptStat(receipt, done){
	if(!receipt)
		done();
	console.log("buildReceiptStat starting");
	var receiptStat = {
			_id:receipt.receiptId,
			receiptId : receipt.receiptId,
			timestamp : receipt.timestamp,
			energy    : 0,
			proteins  : 0,
			fat       : 0,
			carbohydrates     : 0,
			energy_unit   : 'Kj',
			proteins_unit : 'g',
			fat_unit      : 'g',
			carbohydrates_unit    : 'g',
	};

	ReceiptDetail.byReceiptId(receipt.receiptId, function(err, receiptDetails) {
		if(err != null) {
			console.log("error : ", err);
			return done("error");
		}
		// calcule 
		var batch = new Batch;
		batch.concurrency(5);
		for (idx in receiptDetails) {
			receiptDetail = receiptDetails[idx];
			var barcode = receiptDetail.barcode;
			(function(barcode){
				batch.push(function(done) {
					FoodFact.byBarcode(barcode,function(err,foodfact) {
						if(!foodfact || foodfact.length==0)
							return done();
						foodfact = foodfact[0];
						if(foodfact.energy) {
							receiptStat.energy += foodfact.energy;
							if(receiptStat.energy_unit != foodfact.energy_unit)
								console.log("WARNING : ENERGY UNITS ARE DIFFERENTS :",receiptStat.energy_unit,foodfact.energy_unit);
						}
						if(foodfact.fat) {
							receiptStat.fat += foodfact.fat;
							if(receiptStat.fat_unit != foodfact.fat_unit)
								console.log("WARNING : FAT UNITS ARE DIFFERENTS :",receiptStat.fat_unit,foodfact.fat_unit);
						}
						if(foodfact.proteins) {
							receiptStat.proteins += foodfact.proteins;
							if(receiptStat.proteins_unit != foodfact.proteins_unit)
								console.log("WARNING : PROTEINS UNITS ARE DIFFERENTS :",receiptStat.proteins_unit,foodfact.proteins_unit);
						}
						if(foodfact.carbohydrates) {
							receiptStat.carbohydrates += foodfact.carbohydrates;
							if(receiptStat.carbohydrates_unit != foodfact.carbohydrates_unit)
								console.log("WARNING : CARBOHYDRATES UNITS ARE DIFFERENTS :",receiptStat.carbohydrates_unit,foodfact.carbohydrates_unit);
						}
						done();
					});
				});
			})(barcode);
		}

		batch.end(function(err, users){
			console.log("buildReceiptStat finished");
			ReceiptStat.create(receiptStat, function(err, receiptStat) {
				return done(err);
			});
		});
	});		
}

/**
 * retourne les statistiques nutritionnelles dans l'ordre chronologique.
 * @param done
 */
function getReceiptStats(done){
	ReceiptStat.byTimestamp(function(err, receiptStat) {
		if(err){
			return done("error :"+err);
		}
		return done(receiptStat);
	});
}
/**
 * retourne la somme des 2 valeurs si définies.
 * @param val1
 * @param val2
 * @returns
 */
function sumValues(val1, val2){
	if(val1 && val2)
		return val1 + val2;
	if(val1)
		return val1;
	if(val2)
		return val2;
	return 0;
}

/**
 * retourne la liste complete des produits qui n'ont pas d'informations nutritionnelles.
 */
function getInvalidProducts(done){
	FoodFact.invalidProducts(function(err, products) {
	    if(err != null) {
	      console.log("error : ", err);
	      return done("error");
	    }
	    return done(products);
	});
}

/**
 * post les changements de produits.
 * @param req
 * @param done
 */
function postFoodfacts(params, done){
	// calcule 
	var batch = new Batch;
	batch.concurrency(5);

	for (key in params) {
		if(key.substring(0, 4) == "name"){
			var barcode = key.substring(5);
			var changed = params["changed_"+barcode];
			if(changed!="true")
				continue;
			var newFoodfact = {
				barcode :barcode,	
				name   : params["name_"+barcode].trim(),
				energy : params["energy_"+barcode].trim(),
				energy_unit : "Kj",
				fat : params["fat_"+barcode].trim(),
				fat_unit : "g",
				proteins : params["proteins_"+barcode].trim(),
				proteins_unit : "g",
				carbohydrates : params["carbohydrates_"+barcode].trim(),
				carbohydrates_unit : "g",
				weight : params["weight_"+barcode].trim()
			};
			if( newFoodfact.name.length + 
				newFoodfact.energy.length + 
				newFoodfact.fat.length + 
				newFoodfact.proteins.length + 
				newFoodfact.carbohydrates.length + 
				newFoodfact.weight.length > 0
			) {
				(function(newFoodfact){
					batch.push(function(done) {
						FoodFact.byBarcode(newFoodfact.barcode,function(err,foodfact) {
							if(!foodfact || foodfact.length==0) {
								console.log("barcode invalide");
								return done();
							}
							foodfact = foodfact[0];
							if(newFoodfact.name.length>0)
								foodfact.name = newFoodfact.name;
							if(newFoodfact.energy.length>0) {
								foodfact.energy = newFoodfact.energy;
								foodfact.energy_unit = newFoodfact.energy_unit;
							}
							if(newFoodfact.fat.length>0) {
								foodfact.fat = newFoodfact.fat;
								foodfact.fat_unit = newFoodfact.fat_unit;
							}
							if(newFoodfact.proteins.length>0) {
								foodfact.proteins = newFoodfact.proteins;
								foodfact.proteins_unit = newFoodfact.proteins_unit;
							}
							if(newFoodfact.carbohydrates.length>0) {
								foodfact.carbohydrates = newFoodfact.carbohydrates;
								foodfact.carbohydrates_unit = newFoodfact.carbohydrates_unit;
							}
							if(newFoodfact.weight.length>0)
								foodfact.weight = newFoodfact.weight;
							
							foodfact.save(function(){
								// met à jour OpenFoodFact (Async).
								postOpenFoodFact(foodfact);
								// terminé.
								done();
							});
						});
					});
				})(newFoodfact);
			}
		}
	}
	
	batch.end(function(err, users){
		console.log("post FoodFacts finished");
		// recalcule les stats (Async).
		done();
		//buildAllStats(done);
		// terminé.
		//return done(err);
	});
}
/**
 * <input type="file" accept="image/*" class="img_input" name="imgupload_front" id="imgupload_front" data-url="/cgi/product_image_upload.pl" multiple="">
 * @param foodfact
 */
function postOpenFoodFact(foodfact, done){
//	if(foodfact.barcode.localeCompare("3073780969000")){
//		return;
//	}
	var data = {
		code     : foodfact.barcode,
		user_id  : "mesinfosnutritionelles",
		password : "mesinfos",
		product_name : foodfact.name?foodfact.name:foodfact.shop_label,
		quantity : foodfact.weight?""+foodfact.weight+" g":undefined,
		stores:"Intermarché",
		nutriment_energy:foodfact.energy,
		nutriment_energy_unit:foodfact.energy_unit,
		nutriment_fat:foodfact.fat,
		nutriment_fat_unit:foodfact.fat_unit,
		nutriment_proteins:foodfact.proteins,
		nutriment_proteins_unit:foodfact.proteins_unit,
		nutriment_carbohydrates:foodfact.carbohydrates,
		nutriment_carbohydrates_unit:foodfact.carbohydrates_unit,
		nutrition_data_per:"serving"
	};
	console.log("ajout à OenFoodFact",data);
	Request.post('http://fr.openfoodfacts.org/cgi/product_jqm2.pl', 
		{form:data},
		function (error, response, body) {
	        if(debug)
	        	console.log(body);
	        var resp = JSON.parse(body);
	        if(!error && resp.status==1){
	        	postOpenFoodFactImage(foodfact.barcode, done);
	        } else {
	        	if(done) done();
	        }
	    }
	);
}

/**
 * envoi l'image intermarché à OpenFoodFact si nécéssaire.
 * http://drive.intermarche.com/ressources/images/produit/zoom/03178050000749.jpg
 * @param barcode
 */
function postOpenFoodFactImage(barcode, done){
	if(!barcode)
		return;
	// 1/ vérifie que le produit existe et n'a pas déja d'image dans off
	openFoodFactsClient.get("api/v0/produit/"+ barcode +".json", function(err, res, body){
		if(err){
			if (done) done(err);
			return;
		}
		if(body.status==0){
			if (done) done("produit inconnu");
			return;
		}
		if(body.product.image_url){
			if (done) done("déja une image");
			return;
		}
		fixedcode = String('00000000000000'+barcode).slice(-14);
		// 2/ charge l'image pour ce code bare.
		Request('http://drive.intermarche.com/ressources/images/produit/zoom/'+fixedcode+'.jpg',
			function (error, response, body) {
			  if (!error && response.statusCode == 200) {
				// 3/ envoi de l'image.
				var form = new FormData();
				form.append('code', barcode);
				form.append('imagefield', "front");
				form.append('imgupload_front', fs.createReadStream('temp/zoom_'+barcode+'.jpg'));
				form.submit('http://fr.openfoodfacts.org/cgi/product_image_upload.pl', 
					function(err, res) {
					  // res – response object (http.IncomingMessage)  //
					  //res.resume(); // for node-0.10.x
					  if(done) done(err);
					}
				);
			  } else {
				  if(done) done("pas d'image");
			  }
			  return;
			}
		).pipe(fs.createWriteStream('temp/zoom_'+barcode+'.jpg'));
	});
}

function dayFacts(day, done){
	// 1 gets product from day
	ReceiptDetail.productsByDay(day, function(err, products) {
		if(err != null) {
			console.log("error : ", err);
			return done("error");
		}
		var allBarcodes = new Array();
		// 2 load facts data.
		var batch = new Batch;
		batch.concurrency(5);
		var foodfacts=new Array();
		for (idx in products) {
			product = products[idx];
			barcode = product.barcode;
			if(allBarcodes[barcode]){
				allBarcodes[barcode]++;
				continue;
			}	
			allBarcodes[barcode]=1;
			(function(barcode){
				batch.push(function(donecb) {
					FoodFact.byBarcode(barcode, function(err, foodfact){
						foodfacts.push(foodfact[0]);
						donecb();
					});
				});
			})(barcode);
		}
		
		batch.end(function(err,data){
			console.log("dayFacts built");
			return done(foodfacts);
		});
	});
}
// retourne H-24H
function yesterday(){
	var yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	return yesterday;
}