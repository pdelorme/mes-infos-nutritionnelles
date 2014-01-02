var Request = require('request-json');
var Batch = require('batch');
var FoodFact = require('../models/foodfact');
var ReceiptStat = require('../models/receiptstat');
var openFoodFactsClient = Request.newClient('http://fr.openfoodfacts.org/');

module.exports.cleanDatabase = function(req, res) {
	cleanDatabase(function(){
		cleanAllStats(function(){
			res.send(200, "OK");
		});
	});
};

module.exports.buildDatabase = function(req, res) {
	updateAllFoodfacts(function(){
		res.send(200, "OK");
		
	});
};

module.exports.buildAllStats = function(req, res){
	buildAllStats(function(err){
		res.send(200, "OK");
	});
};

module.exports.receiptStats = function(req, res){
	getReceiptStats(function(receiptStats){
		res.send(200, receiptStats);
	});
};

module.exports.invalidProducts = function(req, res) {
	getInvalidProducts(function(products){
			res.send(200, products);
	});
};

module.exports.test = function(req, res){
	var product = {
			barcode : '3228021950129',
			label : 'test'
	};
	updateFoodfact(product, new Date(), function(){
		res.send(200);
	});
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
 * 
 * @param done : callback when over.
 */
function updateAllFoodfacts(done){
	var timestamp = new Date();
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
			        updateFoodfact(product, timestamp, done);		        
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
 * récupère les informations nutritionnelles lié au code bare depuis openfoodfacts si nécéssaire 
 * et sauve les en cache.
 * "http://fr.openfoodfacts.org/api/v0/produit/"+ barcode +".json"
 */
function updateFoodfact(product, timestamp, done){
	// vérifie si elle sont présentes en base.
	FoodFact.byBarcode(product.barcode,function(err,foodfact) {
		if(foodfact) {
			if(foodfact.length>0)
				foodfact=foodfact[0];
			else 
				foodfact = undefined;
		}
		if(foodfact && foodfact.last_update && foodfact.last_update.getTime()==timestamp.getTime()) {
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
			
			foodfact.last_update=timestamp;
			
			if(body.status!=0){
				foodfact.name = body.product.product_name;
				if(body.product.nutriments){
					foodfact.energy = body.product.nutriments.energy;
					foodfact.energy_unit = body.product.nutriments.energy_unit;
					// foodfact.nutriments = body.product.nutriments;
				}
			}			
			
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
 * Itère sur tous les tickets de caisses et totalise les nutiments 
 */
function buildAllStats(done){
	// 1/ clear all stats data.
	cleanAllStats(function(){
		// 2/ build stats.
		Receipt.all(function(err, allReceipt) {
		    if(err != null) {
		      console.log("error : ", err);
		      return done("error");
		    }
		    var batch = new Batch;
		    batch.concurrency(1);

		    for (idx in allReceipt) {
		        var receipt = allReceipt[idx];
		        console.log("pushing ",receipt.receiptId);
		        (function(receipt){
			        batch.push(function(done2){
			        	console.log("pulling ",receipt.receiptId);
			        	buildReceiptStat(receipt, done2);
			        });
		        })(receipt);
		    }
		    
		    batch.end(function(err, users){
		    	if(err)
		    		console.log(err);
		    	console.log("buildNutritionalData finished");
		    	done();
		    });
		  });
	});
}

/**
 * Construit les stats pour ce tickets.
 * @param receipt
 */
function buildReceiptStat(receipt, done){
	if(!receipt)
		done();
    
	var receiptStat = {
			_id:receipt.receiptId,
			receiptId : receipt.receiptId,
			timestamp : receipt.timestamp,
			energy    : 0,
			energy_unit : 'Kj'
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
						if(foodfact.energy)
							receiptStat.energy += foodfact.energy;
						if(receiptStat.energy_unit != foodfact.energy_unit){
							console.log("WARNING : UNITS ARE DIFFERENTS :",receiptStat.energy_unit,foodfact.energy_unit);
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
	    
//	    batch = new Batch;
//	    batch.concurrency(1);
//	    
//	    for (idx in products) {
//	        product = products[idx];
//	        (function(product){
//		        batch.push(function(done){
//			        		        
//			    });
//		    })(product);
//	    }
//	    
//	    batch.end(function(err, users){
//	    	console.log("invalid products finished");
//	    	done();
//	    });
	    return done(products);
	});
}
