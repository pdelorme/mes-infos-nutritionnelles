//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = InfoView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/info'),
    events: {
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template());
    },
    
});

