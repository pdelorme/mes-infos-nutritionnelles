/* 
* Set the routes of your app here.
*/ 

ReceiptDetails = require('./receiptdetails');
Services = require('./services');

module.exports = {
  'receiptdetails': {
      get: ReceiptDetails.list
  },
  'buildDatabase' : {
	  get : Services.buildDatabase
  },
  'cleanDatabase' : {
	  get : Services.cleanDatabase
  }
};

