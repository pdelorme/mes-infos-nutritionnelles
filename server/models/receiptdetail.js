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
 'ticketId': String,
 'intermarcheShopId': String,
 'timestamp': Date,
 'isOnlineBuy': Boolean
 });

ReceiptDetail.all = function(callback) {
    ReceiptDetail.request(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

