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
