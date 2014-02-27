americano = require('americano');

module.exports = ReceiptStat = americano.getModel('receiptstat', {
	receiptId: String,
	timestamp : Date,
	energy : Number,
	energy_unit : String,
	fat : Number,
	fat_unit : String,
	proteins : Number,
	proteins_unit : String,
	carbohydrates : Number,
	carbohydrates_unit : String
});

ReceiptStat.touch = function() {
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

  ReceiptStat.rawRequest("all", params, cbGen("receiptstat/all"));
  ReceiptStat.rawRequest("byreceiptId", params, cbGen("receiptstat/byreceiptId"));
  ReceiptStat.rawRequest("bytimestamp", params, cbGen("receiptstat/bytimestamp"));
};

ReceiptStat.all = function(callback) {
	ReceiptStat.request(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptStat.truncate = function(callback){
	ReceiptStat.requestDestroy(
	        "all", 
	        {},
	        function(err, instances) {
	            callback(null, instances);
	        }
	    );	
};

ReceiptStat.byReceiptId = function(receiptId, callback) {
	ReceiptStat.request(
        "byReceiptId", 
        { key : receiptId },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

ReceiptStat.byTimestamp = function(callback) {
	ReceiptStat.request(
        "bytimestamp", 
        { descending: false },
        function(err, instances) {
            callback(null, instances);
        }
    );
};
