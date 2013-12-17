var Request = require('request-json');
var Batch = require('batch');
var FoodFact = require('../models/foodfact');
var FoodFact = require('../models/receiptstat');

module.exports.cleanDatabase = function(req, res) {
	cleanDatabase(function(){
		res.send(200, "OK");
	});
}

module.exports.buildDatabase = function(req, res) {
	checkAllFoodfacts(function(){
		buildAllStats(function(err){
			res.send(200, "OK");
		});
	});
}

/**
 * deletes all data related to the application.
 * @param done
 */
function cleanDatabase(done){
	
}
/**
 * itère sur tous les articles de ticket de caisse et questionne OpenFoodFacts pour les info nutritionnelles.
 * les infos sont stockées localement pour éviter de surcharger openfoodfacts et améliorer les performances.
 * 
 * @param done : callback when over.
 */
function checkAllFoodfacts(done){
	ReceiptDetail.all(function(err, receiptDetails) {
	    if(err != null) {
	      console.log("error : ", err);
	      return;
	    }
	    batch = new Batch;
	    batch.concurrency(1);
	    
	    for (idx in receiptDetails) {
	        receiptDetail = receiptDetails[idx];
	        barcode = receiptDetail.barcode;
	        (function(barcode){
		        batch.push(function(done){
			        checkFoodfact(barcode, done);		        
			    });
		    })(barcode);
	    }
	    
	    batch.end(function(err, users){
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
function checkFoodfact(barcode, done){
	// vérifie si elle sont présentes en base.
	FoodFact.findBarcode(barcode,function(err,foodfact) {
		if(foodfact && foodfact.length>0) {
			return done();
		}	
		var openFoodFactsClient = Request.newClient('http://fr.openfoodfacts.org/');
		// si non présentes : récupérer depuis openfood facts.
		openFoodFactsClient.get("api/v0/produit/"+ barcode +".json", function(err, res, body){
			if(err){
				console.log("unexpected error :",err);
				return done();
			}
			
			if(body.status==0){
				console.log(">>",barcode,":",body.status_verbose);
				// tag product as not in openfoodfacts.
				var foodfact = {code : ""+barcode };
				FoodFact.create(foodfact, function(err, foodfact) {
					if(err)
				   	   console.log(err);
				    return done();
				});
				return;
			}
			
			var foodfact = {
				name : body.product.product_name,
				code : body.product.code,
				//aditives : body.product.additives_tags,
				//nurtiments : body.product.nutriments,
				//traces : body.product.traces_tags
			};
			console.log(">>",barcode,":",foodfact);
			FoodFact.create(foodfact, function(err, foodfact) {
		       if(err)
		    	   console.log(err);
		       return done();
			});
		});
	});
}

/**
 * Itère sur tous les tickets de caisses et totalise les nutiments 
 */
function buildAllStats(done){
	// 1/ clear all stats data.
	// 2/ build stats.
	Receipt.all(function(err, allReceipt) {
	    if(err != null) {
	      console.log("error : ", err);
	      return done("error");
	    }
	    var opCount = 0;
	    for (idx in allReceipt) {
	    	opCount ++;
	        receipt = allReceipt[idx];
	        buildReceiptStat(receipt, function(err){terminate(err);});
	    }
	    
	    function terminate(err){
	    	opCount--;
	    	if(opCount==0)
	    		done(err);
	    }
	  });
}

/**
 * Construit les stats pour ce tickets.
 * @param receipt
 */
function buildReceiptStat(receipt, done){
	if(!receipt)
		done();
	receiptId = receipt.receiptId;
    timestamp = receipt.timestamp;
	ReceiptStat.byReceiptId(receiptId, function(err, receiptStat){
		if(err != null) {
	      console.log("error : ", err);
	      return done("error");
	    }
		ReceiptDetail.byReceiptId(receiptId, function(err, receiptDetails) {
		    if(err != null) {
		      console.log("error : ", err);
		      return done("error");
		    }
		    var opCount = 0;
		    for (idx in receiptDetails) {
		    	opCount ++;
		        receiptDetail = receiptDetails[idx];
		        barcode = receiptDetail.barcode;
		        FoodFacts.byBarcode(barcode,function(err,foodfact) {
		    		if(!foodfact)
		    			return terminate(0);
		    		accumulateNutriments(receiptStat,foodfact);
		    		terminate(0);
		        });
		    }
		    
		    function terminate(err){
		    	opCount--;
		    	if(opCount==0){
		    		receiptStat.save(function(err,receiptStat){
		    			done(err);
		    		});
		    	}
		    }
		  });		
    });
    
}

function accumulateNutriments(receiptStat, foodfact){
	if(!receiptStat.nutriment){
		receiptStat.nutriment = {};
	}
	receiptStat.nutriment = { energy : sumValues (receiptStat.nutriment.energy, foodfact.nutriments.energy) };
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

