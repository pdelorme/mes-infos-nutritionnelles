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
        },
        products: {
        	map: function(doc) {
        		emit(doc.barcode, doc);
        	},
        	reduce: function (key, values, rereduce) {
        		var maxTime;
        		var meanPrice = 0;
        		for(var i=0; i<values.length; i++){
        			if(!maxTime || maxTime < values[i].timestamp){
        				maxTime = values[i].timestamp;
        			}
        			meanPrice = meanPrice + values[0].price
        		}
        		meanPrice = meanPrice / values.length;
        		return {
        			_id : values[0].barcode,
        			barcode : values[0].barcode,
        			label : values[0].label,
        			count : values.length,
        			family: values[0].family,
        			familyLabel : values[0].familyLabel,
        			section: values[0].section,
        			sectionLabel: values[0].sectionLabel,
        			lastDate : maxTime,
        			price : values[0].price,
        			meanPrice:meanPrice
        		}
        	}
        },
        productsByDay: function(doc) {
    		//var date = new Date(doc.timestamp);
    		//var day = ""+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
    		//emit(day, doc);
    		emit(doc.timestamp.slice(0, 10), doc);
        }
    },
    foodfact: {
    	all: americano.defaultRequests.all,
    	byBarcode: function(doc) {
    		emit(doc.barcode, doc);
    	},
    	invalidProducts: function(doc) {
    		if( !doc.energy || doc.energy==0 || 
    			!doc.fat || doc.fat==0 || 
    			!doc.carbohydrates || doc.carbohydrates==0 || 
    			!doc.proteins || doc.proteins==0 || 
    			!doc.name || doc.name.trim().length==0
    		){
    			emit(doc.barcode, doc);
    		}
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
