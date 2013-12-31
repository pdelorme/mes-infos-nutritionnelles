var AppView = require('views/app_view');
var ReceiptCollection = require('collections/receipts');

var receipts = new ReceiptCollection();
var mainView;

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main',
        'stats': 'stats',
        'coach': 'coach',
        'control': 'control',
        '*path' : 'main'
    },

    main: function() {
        this.mainView = new AppView({
            collection: receipts
        });
        this.mainView.render();
    },
    
    stats: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.statsView();
    },
    
    coach: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.coachView();
    },
    
    control: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.controlView();
    }
});