/* 
* Set the routes of your app here.
*/ 

ReceiptDetails = require('./receiptdetails');

module.exports = {
  'receiptdetails': {
      get: ReceiptDetails.list
  }
};

