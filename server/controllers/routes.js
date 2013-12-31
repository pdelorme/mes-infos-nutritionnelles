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
  'buildAllStats' : {
	  get : Services.buildAllStats
  },
  'receiptStats' : {
	  get : Services.receiptStats
  },
  'cleanDatabase' : {
	  get : Services.cleanDatabase
  },
  'invalidProducts' : {
	  get : Services.invalidProducts
  },
  'test' : {
	  get : Services.test
  }
};

