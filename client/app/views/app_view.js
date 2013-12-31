var StatsView = require('./stats_view');
var CoachView = require('./coach_view');
var ControlView = require('./control_view');

module.exports = AppView = Backbone.View.extend({

    el: 'body',
    template: require('../templates/home'),
    events: {
        "click #stats": "statsView",
        "click #coach": "coachView",
        "click #control": "controlView"
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
		coachView = new CoachView({
	        model: this.collection
	    });
	    coachView.render();
	    this.$el.find('#tab-content').html(coachView.$el);
    },
    
    controlView:function(event){
		controlView = new ControlView({
	        model: this.collection
	    });
	    controlView.render();
	    this.$el.find('#tab-content').html(controlView.$el);
    }
});