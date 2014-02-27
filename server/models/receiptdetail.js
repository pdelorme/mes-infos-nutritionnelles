americano = require('americano');

module.exports = ReceiptDetail = americano.getModel('receiptdetail', {
 'origin': String,
 'order': Number,
 'barcode': String,
 'label': String,
 'family': String,
 'familyLabel': String,
 'section': String,
 'sectionLabel': String,
 'amount': Number,
 'price': Number,
 'type': String,
 'typeLabel': String,
 'receiptId': String,
 'intermarcheShopId': String,
 'timestamp': Date,
 'isOnlineBuy': Boolean
 });

ReceiptDetail.touch = function() {
  var cbGen = function(reqName) {
      var startTime = Date.now();

      return function() {
          console.log("Touch " + reqName + " in " + (Date.now() - startTime) + "ms");
      };
  }

  var params = { 
      limit: 1,
      reduce: false
  };

  ReceiptDetail.rawRequest("all", params, cbGen("receiptdetail/all"));
  ReceiptDetail.rawRequest("byReceiptId", params, cbGen("receiptdetail/byReceiptId"));  
  ReceiptDetail.rawRequest("products", params, cbGen("receiptdetail/products"));
  ReceiptDetail.rawRequest("productsByDay", params, cbGen("receiptdetail/productsByDay"));

};

ReceiptDetail.all = function(callback) {
    ReceiptDetail.request(
        "all", 
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptDetail.byReceiptId = function(receiptId, callback) {
    ReceiptDetail.request(
        "byReceiptId", 
        { keys: [receiptId,  receiptId.slice(0, -1)] },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptDetail.products = function(callback) {
    ReceiptDetail.request(
        "products", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptDetail.productsByDay = function(day, callback) {
	var dayString = day.toISOString().slice(0, 10);
	ReceiptDetail.request(
        "productsByDay", 
        {key:dayString},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptDetail._enrichReceiptDetail = function(rdet) {
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

	grs = reg.exec(rdet.label);
	rdet.weightUnit="g";
	rdet.quantityWeight="";
	if (grs) {

		rdet.weightUnit = (grs[3] in unitMap) ? unitMap[grs[3]] : grs[3] ;
		rdet.quantityAmount = parseInt(grs[1]?grs[1]:grs[4]);
		rdet.quantityWeight = parseInt(grs[2]);
		rdet.quantityLabel = grs[0];
		
		if (rdet.quantityAmount) {
			rdet.totalWeight = rdet.quantityWeight * rdet.quantityAmount;
			
			rdet.quantityLabel = rdet.quantityAmount + "x" + rdet.quantityWeight + rdet.weightUnit;
		} else {
			rdet.totalWeight = rdet.quantityWeight;   
			
			rdet.quantityLabel = rdet.quantityWeight + rdet.weightUnit;
		}

		// remove from label 
		rdet.name = rdet.label.substring(0, grs['index']);
		
		
	} else if (rdet.label == "NR" || rdet.label == "NA" || !rdet.label ) {
		rdet.name = rdet.familyLabel;
	} else {
		rdet.name = rdet.label;
	}

	// Clean name look.
	// to lower.
	// points -> spaces.
	if (rdet.name) {
	rdet.name = rdet.name.toLowerCase().replace('.', ' ');
	}
	return rdet;
};

ReceiptDetail._ean13CheckSum = function(rdet) {
    if (rdet.barcode && rdet.barcode.length == 12) {
        // last checksum digit is needed
        // cf : http://fr.wikipedia.org/wiki/Code-barres_EAN#Cl.C3.A9_de_contr.C3.B4le
        
        var even = 0 ;
        var odd = 0 ;
 
        for (var i=0; i<6; i++) {
            odd += parseInt(rdet.barcode[2 * i]);
            even += parseInt(rdet.barcode[2 * i + 1]);
        }
        var checksum = 10 - ( 3 * even + odd ) % 10 ;
 
        rdet.barcode = rdet.barcode + checksum.toString() ;
    }
};

//Automatically called by jugglingdb on requested data.
ReceiptDetail.afterInitialize = function() {
	ReceiptDetail._enrichReceiptDetail(this);
	ReceiptDetail._ean13CheckSum(this);
};
