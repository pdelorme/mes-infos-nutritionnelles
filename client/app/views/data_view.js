//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = DataView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/data'),
    events: {
    	"submit form":"postData",
    	"change input.form-control" : "formChange"
        //"click .receipt": "toggleSections",    
        //"click .toggle": "toggleSectionsNoDefault"    
    },

    initialize: function() {
        // this.collection = new ReceiptCollection([], { receiptId: this.model.attributes.receiptId });
        this.day = this.options.day;
        this.statsView = this.options.statsView;
    },

    render: function() {
    	var headerTemplate = _.template($(this.template()).find("#header").html());
        var html = headerTemplate({day:this.day});
    	this.$el.html(html);
        this.getData();
    },
    
    getData: function(){
    	$("#show").hide();
    	// asks server for product without infos.
    	var that = this;
    	var productBody = this.$el.find("#products-body");
    	var productRowTemplate = _.template($(this.template()).find("#template-row").html());
    	$.getJSON('dayFacts?day='+this.day, function(data) {
        	productBody.html("");
    		$.each(data, function(key, val) {
    		  if(val.shop_label){
    			productBody.append(productRowTemplate(val));
    		  }
    		});
        	$("#loader").hide();
            $(document).scrollTo("#dataContainer",1000, {offset:-50});
    	});
    },
    
    postData: function(e){
    	$("#loader").show();
    	e.preventDefault();
    	var formData = $("form").serialize();
    	var that = this;
    	
    	$.ajax({
		  type: "POST",
		  url: 'postFoodfacts',
		  data: formData,
		  //dataType: "json",
          beforeSend: function(){$("#modal-overlay").show();},
          complete: function(){ $("#modal-overlay").hide();},
		  success: function(data) {
		      // recharge le tableau.
			  that.getData();
			  // reconstruit les stats
			  $.get('buildAllStats', function(){
			    // rafraichi le diagrame.
			    that.statsView.updateChart();
			  });
	    	},
		});
    	
//    	$.postJSON('postFoodfacts', formData, function(data) {
//        	productBody.html("");
//    		$.each(data, function(key, val) {
//    			productBody.append(productRowTemplate(val));
//    		});
//    	});
    },
    formChange: function(e){
    	var id = e.target.name.split('_')[1];
    	$("[name='changed_"+id+"']").val("true");
    }
    
});

