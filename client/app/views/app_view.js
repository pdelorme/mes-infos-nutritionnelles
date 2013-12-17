var StatsView = require('./stats_view');

module.exports = AppView = Backbone.View.extend({

    el: 'body',
    template: require('../templates/home'),
    events: {
        "click #statsButton": "statsView",
        "click #coachButton": "coachView",
        "click #controlButton": "controlView"
    },

    // initialize is automatically called once after the view is constructed
    initialize: function() {
        // this.listenTo(this.collection, "add", this.onBookmarkAdded);
    },

    render: function() {

        // we render the template
        this.$el.html(this.template());

        // fetch the receipts from the database
        this.collection.fetch();
    },

    statsView: function(event) {
      // render the stats view
      statsView = new StatsView({
          model: this.collection
      });
      statsView.render();
      this.$el.find('#tab-content').html(statsView.$el);
    },
    
    coachView:function(event){
    	this.$el.find('#tab-content').html("");
    },
    
    controlView:function(event){
    	this.$el.find('#tab-content').html("");
    }
});