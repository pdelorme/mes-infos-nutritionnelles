americano = require('americano');

module.exports = Receipt = americano.getModel('receipt', {
    'receiptId': String,
    'transactionCode': String,
    'transaction': String,
    'transactionId': String,
    'timestamp': Date,
    'checkoutId': String,
    'checkoutReceiptId': String,
    'cashierId': String,
    'articlesCount': Number,
    'amount': Number,
    'loyaltyBalance': Number,
    'convertedPoints': Number,
    'acquiredPoints': Number,
    'intermarcheShopId': String,
    'total': Number,
    'paidAmound': Number,
    'isOnline': Boolean,
    'snippet': String
});

//unused
//Receipt.all = function(callback) {
//    Receipt.request(
//        "all", 
//        {},
//        function(err, instances) {
//            callback(null, instances);
//        }
//    );
//};

Receipt.newest = function(callback) {
    Receipt.request(
        "byTimestamp", 
        {
            descending: true

            },
        function(err, instances) {
            callback(null, instances);
        }
    );
};