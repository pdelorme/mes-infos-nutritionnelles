americano = require('americano');

module.exports = FoodFact = americano.getModel('FoodFact', {
	name: String,
	barcode : String,
	// nutriments : [String, String],
	energy: Number,
	energy_unit: String,
	proteins:Number,
	proteins_unit: String,
	fat:Number,
	fat_unit:String,
	carbohydrates:Number,
	carbohydrates_unit:String,
	weight: Number, // total weight
	weightUnit:String,
	shop_label:String,
	last_update: Date
});

FoodFact.touch = function() {
  var cbGen = function(reqName) {
      var startTime = Date.now();

      return function() {
          console.log("Touch " + reqName + " in " + (Date.now() - startTime) + "ms");
      };
  };

  var params = { 
      limit: 1,
      reduce: false
  };

  FoodFact.rawRequest("all", params, cbGen("foodfact/all"));
  FoodFact.rawRequest("bybarcode", params, cbGen("foodfact/bybarcode"));
  FoodFact.rawRequest("invalidProducts", params, cbGen("foodfact/invalidProducts"));

};

FoodFact.all = function(callback) {
	FoodFact.request(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.truncate = function(callback) {
	FoodFact.requestDestroy(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.byBarcode = function(barcode, callback) {
	FoodFact.request(
        "bybarcode", 
        { key : ""+barcode },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.invalidProducts = function(callback) {
	FoodFact.request(
        "invalidProducts", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact._enrichReceiptDetail = function(rdet) {
	if(rdet.weight)
		return rdet;
	
    // Parse quantity
    // Match parterns : 3x20cl ; 8x1l ; 70cl ; 6x50 cl ; 180gx3
    
    // 3x : (\d+)x
    // 3x or not : (?:(\d+)x|())
    // 
    // units : (cl|g|l|ml|m)
    //
    // x3 : (?:x(\d+)|())
    
    // g1 : mult
    // g2 : quantity
    // g3 : unit
    // g4 : mult

	reg = /(?:(\d+)x|)(\d+)(cl|g|l|ml|m|kg)(?:x(\d+)|)/i ;
	
	unitMap = {
		"CL": "cL",
		"ML": "mL",
		"M": "ML",
		"L": "L", 
		"G": "g",
		"KG": "kg",
	};

	grs = reg.exec(rdet.shop_label);
	rdet.weightUnit="g";
	if (grs) {
		rdet.weightUnit = (grs[3] in unitMap) ? unitMap[grs[3]] : grs[3] ;
		rdet.quantityAmount = parseInt(grs[1]?grs[1]:grs[4]);
		rdet.quantityWeight = parseInt(grs[2]);
		rdet.quantityLabel = grs[0];
		
		if (rdet.quantityAmount) {
			rdet.weight = rdet.quantityWeight * rdet.quantityAmount;
			
			rdet.quantityLabel = rdet.quantityAmount + "x" + rdet.quantityWeight + rdet.weightUnit;
		} else {
			rdet.weight = rdet.quantityWeight;   
			
			rdet.quantityLabel = rdet.quantityWeight + rdet.weightUnit;
		}

		// remove from label 
		rdet.name = rdet.shop_label.substring(0, grs['index']);
		
		
	} else if (rdet.shop_label == "NR" || rdet.shop_label == "NA" || !rdet.shop_label ) {
		rdet.name = rdet.familyLabel;
	} else {
		rdet.name = rdet.shop_label;
	}

	// Clean name look.
	// to lower.
	// points -> spaces.
	if (rdet.name) {
	rdet.name = rdet.name.toLowerCase().replace('.', ' ');
	}
	return rdet;
};
//Automatically called by jugglingdb on requested data.
FoodFact.afterInitialize = function() {
	FoodFact._enrichReceiptDetail(this);
	ReceiptDetail._ean13CheckSum(this);
 
};

