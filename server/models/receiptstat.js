americano = require('americano');

module.exports = ReceiptStat = americano.getModel('receiptstat', {
	receiptId: String,
	timestamp : Date,
	aditives : [String],
	nurtiments : [String, String],
	traces : [String]
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
        { descending: true },
        function(err, instances) {
            callback(null, instances);
        }
    );
};
