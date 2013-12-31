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
    },

    render: function() {
        this.$el.html(this.template({
            receipt: this.model.toJSON()
        }));
        var that = this;
        // async to allow proper refresh.
        setTimeout(function(){
        	that.updateChart();
        },0);
    },
    
    updateChart: function (callback) {
    	var dataPoints = [];
    	var averagePoints = [];
    	var chartContainer = this.$el.find("#chartContainer");
		var chart = new CanvasJS.Chart(chartContainer,{
			title:{
				text: "Energy Chart"
			}, 
			axisX:{
			   labelAngle: 50,
			   valueFormatString: "M/Y",
			   lineThickness:0,
			   gridThickness:0,
			   tickThickness:0,
			   interval:1,
			   intervalType:"week"
			},
			axisY:{
				title:"Kilo Joules",
				valueFormatString: "0.##",
				labelFontSize:1,
				lineThickness:0,
				gridThickness:0,
				tickThickness:0,
				minimum:0,
				interval:10
			},
			data: [
			       {
			    	   type: "column",
			    	   color: "rgba(54,158,173,.7)",
			    	   dataPoints: dataPoints,
			    	   indexLabelPlacement:"outside",
			    	   indexLabelAngle:50,
			    	   indexLabel: "{y}"
			       },
			       {
			    	   type: "splineArea",
			    	   color: "rgba(8,15,173,.7)",
			    	   dataPoints: averagePoints,
			    	   markerType:"none"
			       }
			 ]
		});
		this.chart = chart;
		// empty datapoints.
    	dataPoints.length = 0;
    	averagePoints.length = 0;
		// build stats.
		$.getJSON('receiptStats', function(data) {
			var receiptStats = data;
			var prevDay;
			var prevValue;
			$.each(receiptStats, function(key, val) {
				var date = new Date(val.timestamp);
				var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
				var energy = val.energy;
				if(prevDay){
					days = ((day.getTime()-prevDay.getTime())/(1000*60*60*24));
					if(days==0) {
						lastDataPoint = dataPoints.pop();
						energy = lastDataPoint.y + energy;
					}
					else {
						meanValue = Math.round(prevValue / days * 100) / 100;
						for(var theTime = prevDay.getTime(); theTime<day.getTime(); theTime+=(1000*60*60*24)){
							averagePoints.push({x:new Date(theTime), y:meanValue});
						}
						
					}
				}
				prevDay   = day;
				prevValue = energy;
				console.log(day, energy);
				dataPoints.push({x:day, y: energy});
			});
			console.log("nb points:",dataPoints.length);
			
			// refresh view.
			chart.render();

			if(callback)
				callback();
		});
	}
});

