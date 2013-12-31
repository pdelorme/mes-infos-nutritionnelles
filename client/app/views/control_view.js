//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = StatsView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/control'),
    events: {
        //"click .receipt": "toggleSections",    
        //"click .toggle": "toggleSectionsNoDefault"    
    },

    initialize: function() {
        // this.collection = new ReceiptCollection([], { receiptId: this.model.attributes.receiptId });
        
    },

    render: function() {
        this.$el.html(this.template());
        this.getData();
    },
    
    getData: function(){
    	// asks server for product without infos.
    	var that = this;
    	var productBody = this.$el.find("#products-body");
    	var productRowTemplate = _.template(this.$el.find("#template-row").html());
    	productBody.html("");
    	$.getJSON('invalidProducts', function(data) {
    		$.each(data, function(key, val) {
    			productBody.append(productRowTemplate(val));
    		});
    	});
    }
    
});

