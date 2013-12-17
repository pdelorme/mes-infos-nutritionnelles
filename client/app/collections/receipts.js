Receipt = require('../models/receipt');
module.exports = ReceiptDetails = Backbone.Collection.extend({
    model: Receipt,
    url: 'receipts'
})
