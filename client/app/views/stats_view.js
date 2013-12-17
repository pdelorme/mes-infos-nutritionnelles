//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = StatsView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/stats'),
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
        this.chartStats();
    },
    
    chartStats: function () {
    	var chartContainer = this.$el.find("#chartContainer");
		var chart = new CanvasJS.Chart(chartContainer,{
			title:{
				text: "Spline Area Chart"
			},    		
			data: [
			{        
				type: "splineArea",
				color: "rgba(54,158,173,.7)",
				dataPoints: [
				{x: new Date(1992,0), y: 2506000},     
				{x: new Date(1993,0), y: 2798000},     
				{x: new Date(1994,0), y: 3386000},     
				{x: new Date(1995,0), y: 6944000},     
				{x: new Date(1996,0), y: 6026000},     
				{x: new Date(1997,0), y: 2394000},     
				{x: new Date(1998,0), y: 1872000, indexLabel:"test"},     
				{x: new Date(1999,0), y: 2140000},     
				{x: new Date(2000,0), y: 7289000},     
				{x: new Date(2001,0), y: 4830000},     
				{x: new Date(2002,0), y: 2009000},     
				{x: new Date(2003,0), y: 2840000},     
				{x: new Date(2004,0), y: 2396000},     
				{x: new Date(2005,0), y: 1613000},     
				{x: new Date(2006,0), y: 2821000},     
				{x: new Date(2007,0), y: 2000000},     
				{x: new Date(2008,0), y: 1397000}    
				]
			},
			{        
				type: "spline",
				color: "rgba(12,25,73,.7)",
				dataPoints: [
				{x: new Date(1993,0), y: 2506000},     
				{x: new Date(1994,0), y: 2798000},     
				{x: new Date(1995,0), y: 3386000},     
				{x: new Date(1996,0), y: 6944000},     
				{x: new Date(1997,0), y: 6026000},     
				{x: new Date(1998,0), y: 2394000},     
				{x: new Date(1999,0), y: 1872000},     
				{x: new Date(2000,0), y: 2140000},     
				{x: new Date(2001,0), y: 7289000},     
				{x: new Date(2002,0), y: 4830000},     
				{x: new Date(2003,0), y: 2009000},     
				{x: new Date(2004,0), y: 2840000},     
				{x: new Date(2005,0), y: 2396000},     
				{x: new Date(2006,0), y: 1613000},     
				{x: new Date(2007,0), y: 2821000},     
				{x: new Date(2008,0), y: 2000000},     
				{x: new Date(2009,0), y: 1397000}    
				]
			}                 
			]
		});

		chart.render();
	}
});

