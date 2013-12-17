var AppView = require('views/app_view');
var ReceiptCollection = require('collections/receipts');

var receipts = new ReceiptCollection();

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main'
    },

    main: function() {
        var mainView = new AppView({
            collection: receipts
        });
        mainView.render();
    }
});