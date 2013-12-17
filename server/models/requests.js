/*
* Put here the requests to the DataSystem.
*/

americano = require('americano');

module.exports = {
    receipt: {
        all: americano.defaultRequests.all,
        bytimestamp: function(doc){
        	emit(doc.timestamp, doc);
        }
    },
    receiptdetail: {
        all: americano.defaultRequests.all,
        byReceiptId: function(doc) {
    	  if (!doc.receiptId) {
    		emit(doc.ticketId, doc);
          } else {
            emit(doc.receiptId, doc);
          }
        }
    },
    foodfact: {
        all: americano.defaultRequests.all,
        byBarcode: function(doc) {
          emit(doc.code, doc);
        }
    },
    receiptstat: {
        all: americano.defaultRequests.all,
        byreceiptId: function(doc) {
          emit(doc.receiptId, doc);
        },
        bytimestamp: function(doc) {
          emit(doc.timestamp, doc);
        }
    }
};
