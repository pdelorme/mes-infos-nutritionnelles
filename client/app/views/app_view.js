var StatsView = require('./info_view');
var StatsView = require('./stats_view');
var CoachView = require('./coach_view');
var ControlView = require('./control_view');
var DataView = require('./data_view');

module.exports = AppView = Backbone.View.extend({

    el: 'body',
    template: require('../templates/home'),
    events: {
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

    infoView: function(event) {
    	$("#loader").show();
    	this.activateMenu("#infoMenuItem");
        // render the stats view
        infoView = new InfoView({
            model: this.collection
        });
        infoView.render();
        this.$el.find('#tab-content').html(infoView.$el);
        $("#loader").hide();
    },
    
    statsView: function(event) {
    	$("#loader").show();
    	this.activateMenu("#statsMenuItem");
    	// render the stats view
    	statsView = new StatsView({
    		model: this.collection
    	});
    	statsView.render();
    	this.$el.find('#tab-content').html(statsView.$el);
    	$("#loader").hide();
    },
    
    coachView:function(event){
    	$("#loader").show();
    	this.activateMenu("#coachMenuItem");
		coachView = new CoachView({
	        model: this.collection
	    });
	    coachView.render();
	    this.$el.find('#tab-content').html(coachView.$el);
        $("#loader").hide();
    },
    
    controlView:function(event){
    	$("#loader").show();
    	this.activateMenu("#controlMenuItem");
		controlView = new ControlView({
	        model: this.collection
	    });
	    controlView.render();
	    this.$el.find('#tab-content').html(controlView.$el);
        $("#loader").hide();
    },
    
    activateMenu: function(elem){
    	$("#loader").show();
    	// disable all menus.
    	$(".navbar-nav li").removeClass("active");
    	// activate menu.
    	$(elem).addClass("active");
    	$("#loader").hide();
    }
});