//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = InfoView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/info'),
    events: {
        //"click .receipt": "toggleSections",    
        //"click .toggle": "toggleSectionsNoDefault"    
    },

    initialize: function() {
        // this.collection = new ReceiptCollection([], { receiptId: this.model.attributes.receiptId });
        
    },

    render: function() {
        this.$el.html(this.template({
            receipt: this.model.toJSON()
        }));
    },
    
});

