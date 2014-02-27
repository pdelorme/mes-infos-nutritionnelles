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
  'dayFacts' : {
	  get : Services.dayFacts
  },
  'postFoodfacts' : {
	  post : Services.postFoodfacts
  },
  'test' : {
	  get : Services.test
  },
  'dummy' : {
	  get : Services.generateDummyData
  },
  'touch': {
    get: Services.touch
},
};

