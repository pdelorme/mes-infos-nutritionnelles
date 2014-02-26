var ReceiptCollection = require('../collections/receipts');

var beige = "247,246,226";
var yellow = "255,235,166";
var black = "47,53,67";
var green = "49,204,200";
var pink = "255,154,146";
var red = "235,105,92";

module.exports = StatsView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/stats'),
    events: {
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template());
        var that = this;
        // async to allow proper refresh.
        setTimeout(function(){
        	that.updateChart();
        },0);
    },
    
    updateChart: function (callback) {
    	$("#loader").show();

    	var energyPoints = [];
    	var fatPoints = [];
    	var proteinsPoints = [];
    	var carbohydratesPoints = [];
    	var averageEnergyPoints = [];
    	var averageFatPoints = [];
    	var averageProteinsPoints = [];
    	var averageCarbohydratesPoints = [];
    	var chartEnergyContainer = this.$el.find("#chartEnergyContainer");
    	var chartNutritionContainer = this.$el.find("#chartNutritionContainer");
    	var that = this;
		var chartEnergy = new CanvasJS.Chart(chartEnergyContainer,{
			//zoomEnabled: true,
		    panEnabled: true, 
		    backgroundColor: "rgb("+yellow+")",
		    toolTip: {
		        borderColor:"white"//shared: "false"  //disable here. 
		    },
		    title:{
				fontSize:15,
				fontFamily:"arial",
				fontWeight:"normal",
				padding:0,
				maring:0,
				verticalAlign: "top", // "top", "center", "bottom"
		        horizontalAlign: "left" // "left", "right", "center"
		        	
			}, 
			axisX:{
			   //labelAngle: 50,
			   valueFormatString: "D MMM",
			   labelFontFamily:"arial",
			   labelFontSize:1,
			   lineThickness:0,
			   gridThickness:0,
			   tickThickness:0,
			   interval:1000,
			   intervalType:"week"
			},
			axisY:{
				//title:"Kilo Joules : Grammes",
				valueFormatString: "0.##",
				labelFontSize:1,
				//labelFontColor:000,
				lineThickness:0,
				gridThickness:0,
				tickThickness:0,
				minimum:0,
				interval:1000
			},
			legend:{
				verticalAlign: "bottom",
				horizontalAlign: "center",
				fontSize: 15,
				fontFamily: "arial",
				fontColor:"gray"
			},
			data: [
			       // energy
			       {
			    	   type: "area",
			    	   color: "rgba("+green+",.3)",
			    	   showInLegend: true,
			    	   name:"energie/jour (Kj)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>energie/jour</span> : {y} Kj", 
			    	   dataPoints: averageEnergyPoints,
			    	   markerType:"none",
			    	   //markerColor:"red",
			       },
			       {
			    	   type: "column",
			    	   color: "rgba("+green+",.7)",
			    	   showInLegend: true,
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>{x}</span> : {y} Kj", 
			    	   name:"energie (Kj)",
			    	   width:50,
			    	   click: function(e){ 
			    		   that.showTicketData(e.dataPoint.x);
			    	   },
			    	   dataPoints: energyPoints,
			    	   indexLabelPlacement:"outside",
			    	   indexLabelOrientation:"vertical",
			    	   indexLabelFontSize:15,
			    	   indexLabelFontFamily: "arial",
			    	   indexLabel: "{x}"
			       }
			 ]
		});
		var chartNutrition = new CanvasJS.Chart(chartNutritionContainer,{
			//zoomEnabled: true,
		    panEnabled: true, 
		    backgroundColor: "rgb("+yellow+")",
		    toolTip: {
		    	borderColor:"white",
		        shared: "true"  //disable here. 
		      },
			title:{
				fontFamily:"arial",
				fontSize:15,
				fontWeight:"normal",
				padding:0,
				maring:0,
				verticalAlign: "top", // "top", "center", "bottom"
		        horizontalAlign: "left" // "left", "right", "center"
		        	
			}, 
			axisX:{
			   labelAngle: 50,
			   valueFormatString: "D MMM",
			   labelFontFamily:"arial",
			   labelFontSize:1,
			   labelFontWeight:"normal",
			   lineThickness:0,
			   gridThickness:0,
			   tickThickness:1,
			   interval:1000,
			   intervalType:"week"
			},
			axisY:{
				//title:"Kilo Joules : Grammes",
				valueFormatString: "0.##",
				labelFontSize:1,
				lineThickness:0,
				gridThickness:0,
				tickThickness:0,
				minimum:0,
				interval:1000
			},
			legend:{
				verticalAlign: "bottom",
				horizontalAlign: "center",
				fontSize: 15,
				fontFamily: "arial",
				fontColor:"gray"
			},
			data: [
			       // fat
			       {
			    	   type: "stackedColumn",
			    	   color: "rgba("+black+",.7)",
			    	   showInLegend: true,
			    	   name:"lipides (g)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>lipides </span>: {y} g", 
			    	   click: function(e){ 
			    		   that.showTicketData(e.dataPoint.x);
			    	   },
			    	   dataPoints: fatPoints,
			    	   indexLabelPlacement:"outside",
			    	   indexLabelAngle:50,
			    	   //indexLabel: "{y}"
			       },
			       {
			    	   type: "stackedArea",
			    	   color: "rgba("+black+",.3)",
			    	   //showInLegend: true,
			    	   name:"lipides/jour (g)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>lipides/jours </span>: {y} g/j", 
			    	   dataPoints: averageFatPoints,
			    	   markerType:"none"
			       },
			       // proteins
			       {
			    	   type: "stackedColumn",
			    	   color: "rgba("+red+",.7)",
			    	   showInLegend: true,
			    	   name:"protéines (g)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>protéines </span>: {y} g", 
			    	   click: function(e){ 
			    		   that.showTicketData(e.dataPoint.x);
			    	   },
			    	   dataPoints: proteinsPoints,
			    	   indexLabelPlacement:"outside",
			    	   indexLabelAngle:50,
			    	   //indexLabel: "{y}"
			       },
			       {
			    	   type: "stackedArea",
			    	   color: "rgba("+red+",.3)",
			    	   //showInLegend: true,
			    	   toolTipContent: "", 
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>protéines/jours </span>: {y} g/j", 
			    	   dataPoints: averageProteinsPoints,
			    	   markerType:"none"
			       },
			       // carbohydrates
			       {
			    	   type: "stackedColumn",
			    	   color: "rgba("+pink+",.7)",
			    	   showInLegend: true,
			    	   name:"glucides (g)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>glucides </span>: {y} g", 
			    	   click: function(e){ 
			    		   that.showTicketData(e.dataPoint.x);
			    	   },
			    	   dataPoints: carbohydratesPoints,
			    	   indexLabelPlacement:"outside",
			    	   indexLabelOrientation:"vertical",
			    	   indexLabelFontSize:15,
			    	   indexLabelFontFamily: "arial",
			    	   indexLabel: "{x}"
			       },
			       {
			    	   type: "stackedArea",
			    	   color: "rgba("+pink+",.3)",
			    	   //showInLegend: true,
			    	   name:"glucides/jour (g)",
			    	   toolTipContent: "<span style='\"'color: {color};'\"'>glucides/jours </span>: {y} g/j", 
			    	   dataPoints: averageCarbohydratesPoints,
			    	   markerType:"none"
			       }
			 ]
		});
		this.chartEnergy = chartEnergy;
		this.chartNutrition = chartNutrition;
		// empty energyPoints.
    	energyPoints.length = 0;
    	averageEnergyPoints.length = 0;
    	fatPoints.length = 0;
    	averageFatPoints.length = 0;
    	proteinsPoints.length = 0;
    	averageProteinsPoints.length = 0;
    	carbohydratesPoints.length = 0;
    	averageCarbohydratesPoints.length = 0;
		// build stats.
		$.getJSON('receiptStats', function(data) {
			var receiptStats = data;
			var prevDay;
			var prevEnergy;
			var prevFat;
			var prevProteins;
			var prevCarbohydrates;
			$.each(receiptStats, function(key, val) {
				var date = new Date(val.timestamp);
				var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
				var energy        = val.energy;
				var fat           = val.fat;
				var proteins      = val.proteins;
				var carbohydrates = val.carbohydrates;
				if(prevDay){
					days = ((day.getTime()-prevDay.getTime())/(1000*60*60*24));
					if(days==0) {
						lastEnergyPoint = energyPoints.pop();
						energy = lastEnergyPoint.y + energy;
						
						lastFatPoint = fatPoints.pop();
						fat = lastFatPoint.y + fat;
						
						lastProteinsPoint = proteinsPoints.pop();
						proteins = lastProteinsPoint.y + proteins;
						
						lastCarbohydratesPoint = carbohydratesPoints.pop();
						carbohydrates = lastCarbohydratesPoint.y + carbohydrates;
					}
					else {
						meanEnergy = Math.round(prevEnergy / days * 100) / 100;
						meanFat = Math.round(prevFat / days * 100) / 100;
						meanProteins = Math.round(prevProteins / days * 100) / 100;
						meanCarbohydrates = Math.round(prevCarbohydrates / days * 100) / 100;

						//for(var theTime = prevDay.getTime(); theTime<day.getTime(); theTime+=(1000*60*60*24)){
							theTime=prevDay.getTime();
							averageEnergyPoints.push({x:new Date(theTime), y:meanEnergy});
							averageFatPoints.push({x:new Date(theTime), y:meanFat});
							averageProteinsPoints.push({x:new Date(theTime), y:meanProteins});
							averageCarbohydratesPoints.push({x:new Date(theTime), y:meanCarbohydrates});
							theTime=day.getTime();
							averageEnergyPoints.push({x:new Date(theTime), y:meanEnergy});
							averageFatPoints.push({x:new Date(theTime), y:meanFat});
							averageProteinsPoints.push({x:new Date(theTime), y:meanProteins});
							averageCarbohydratesPoints.push({x:new Date(theTime), y:meanCarbohydrates});
						//}
					}
				}
				prevDay           = day;
				prevEnergy        = energy;
				prevFat           = fat;
				prevProteins      = proteins;
				prevCarbohydrates = carbohydrates;
				console.log(day, energy, fat, proteins, carbohydrates);
				energyPoints.push({x:day, y: Math.round(energy*100)/100});
				fatPoints.push({x:day, y: Math.round(fat*100)/100});
				proteinsPoints.push({x:day, y: Math.round(proteins*100)/100});
				carbohydratesPoints.push({x:day, y: Math.round(carbohydrates*100)/100});
			});
			console.log("nb points:",energyPoints.length);
			
			// refresh view.
			chartEnergy.render();
			chartNutrition.render();
	    	$("#loader").hide();
			if(callback)
				callback();
		});
	},
    showTicketData : function(timestamp){
    	$("#loader").show();
    	var date = new Date(timestamp);
		var day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    	dataView = new DataView({
    		statsView:this,
    		day:day
    	});
        dataView.render();
        this.$el.find('#dataContainer').html(dataView.$el);
    }

});

