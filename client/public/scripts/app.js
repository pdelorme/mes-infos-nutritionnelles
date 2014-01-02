(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path].exports;
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex].exports;
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("application", function(exports, require, module) {
module.exports = {

    initialize: function() {
        var Router = require('router');
        this.router = new Router();
        Backbone.history.start();
    }
};
});

;require.register("collections/receipts", function(exports, require, module) {
Receipt = require('../models/receipt');
module.exports = ReceiptDetails = Backbone.Collection.extend({
    model: Receipt,
    url: 'receipts'
})

});

;require.register("initialize", function(exports, require, module) {
// The function called from index.html
$(document).ready(function() {
    var app = require('application');

    var locale = 'fr'; // default locale

    // we'll need to tweak the server to allow this
    $.ajax('cozy-locale.json', {
        success: function(data) {
            locale = data.locale
            initializeLocale(locale);
        },
        error: function() {
            initializeLocale(locale);
        }
    });

    // let's define a function to initialize Polyglot
    var initializeLocale = function(locale) {
        var locales = {};
        try {
            locales = require('locales/' + locale);
        }
        catch(err) {
            locales = require('locales/en');
        }

        var polyglot = new Polyglot();
        // we give polyglot the data
        polyglot.extend(locales);

        // handy shortcut
        window.t = polyglot.t.bind(polyglot);
        app.initialize();
    };
});

});

;require.register("locales/en", function(exports, require, module) {
module.exports = {
    "main title": "Welcome to MyInfo Nutritional",
    "main description": "This application will help you track your shopping from nutrional point of view!",
}
});

;require.register("locales/fr", function(exports, require, module) {
module.exports = {
    "main title": "Bienvenue sur MesInfos Nutritionelles",
    "main description": "Cette application vous permet de suivre vos achats en termes nutrionnels. !",
}
});

;require.register("models/receipt", function(exports, require, module) {
module.exports = Receipt = Backbone.Model.extend({

})

});

;require.register("router", function(exports, require, module) {
var AppView = require('views/app_view');
var ReceiptCollection = require('collections/receipts');

var receipts = new ReceiptCollection();
var mainView;

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main',
        'stats': 'stats',
        'coach': 'coach',
        'control': 'control',
        '*path' : 'main'
    },

    main: function() {
        this.mainView = new AppView({
            collection: receipts
        });
        this.mainView.render();
    },
    
    stats: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.statsView();
    },
    
    coach: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.coachView();
    },
    
    control: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.controlView();
    }
});
});

;require.register("templates/coach", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('Hello coach');
}
return buf.join("");
};
});

;require.register("templates/control", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="col-md-9"><H2> Ecran de controle</H2><p>Ce formulaire vous permet de lister les produits dont les informations nutritionnelles n\'ont pas été saisies dans la base de données openfood facts.<br/>\nles informations saisies ici seront envoyées à OpenFoodFacts pour réutilisation par d\'autre personnes du panel MesInfos et plus généralement par tous les utilisateurs de la base de donnée ouverte Open food Facts.<br/>\nMerci de saisir les données nutritionnelles avec soins.</p></div><div class="col-md-3 text-center"><img src="openfoodfacts-logo-fr.png"/></div><div class="col-md-12"><form role="form" action="postFoodfacts" method="post"><table class="table table-striped table-hover table-condensed"><thead><th class="col-md-2">référence intermarché<br/>code bare</th><th class="col-md-1">dernière date d\'achat</th><th class="col-md-3">nom de l\'article</th><th class="col-md-1 text-center">poid <br/>(en grammes)</th><th class="col-md-1 text-center">calories <br/>(en KJoules)</th></thead><tbody id="products-body"><tr><td style="vertical-align:middle">Kiri 500G x6 portions 75G</td><td style="vertical-align:middle">25/12/1969</td><td><input type="text" placeholder="Nom de l\'article" class="form-control"/></td><td><input type="text" placeholder="Grammes" class="form-control"/></td><td><input type="text" placeholder="Kilo Joules" class="form-control"/></td></tr></tbody><tfoot><td colspan="5"> merci pour vos données</td></tfoot></table><button type="submit" class="btn btn-primary">Envoyer les modifications</button></form></div><script id="template-row" type="text/html"><tr>');
 var barcode = "<%= barcode %>"
buf.push('<td style="vertical-align:middle"><%= shop_label %><br/><%= barcode %></td><td style="vertical-align:middle"><%= last_update %></td><td><input');
buf.push(attrs({ 'name':("name_" + (barcode) + ""), 'type':("text"), 'placeholder':("Nom de l'article"), "class": ('form-control') }, {"name":false,"type":true,"placeholder":true}));
buf.push('/></td><td><input');
buf.push(attrs({ 'name':("weight_" + (barcode) + ""), 'type':("text"), 'placeholder':("Grammes"), "class": ('form-control') }, {"name":false,"type":true,"placeholder":true}));
buf.push('/></td><td><input');
buf.push(attrs({ 'name':("energy_" + (barcode) + ""), 'type':("text"), 'placeholder':("Kilo Joules"), "class": ('form-control') }, {"name":false,"type":true,"placeholder":true}));
buf.push('/></td></tr></script>');
}
return buf.join("");
};
});

;require.register("templates/home", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<head><script src="Chart.js"> </script></head><nav role="navigation" class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="navbar-brand">MesInfos Nutritionelles</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="#stats"> Statistiques</a></li><li><a href="#coach"> Analyse</a></li><li><a href="#control"> Vérifications</a></li><li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">A Propos<ul class="dropdown-menu"><li> <a href="#">&copy; 2013 Lookal</a></li><li> <a href="mail:pdelorme@lookal.fr">contact: pdelorme@lookal.fr</a></li><li> <a href="#">Merci à la Fing et à OpenFoodFacts pour leur assistance.<br/>\nLongue vie à mes infos</a></li></ul></a></li></ul></div></div></nav><div class="container">                      <br/><br/><br/><h1>');
var __val__ = t('main title')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><p>');
var __val__ = t('main description')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</p><div id="tab-content"></div></div>');
}
return buf.join("");
};
});

;require.register("templates/stats", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<H1>Statistiques d\'achat nutritionnelles.</H1><div id="chartContainer"></div><button type="button" class="btn btn-primary"> Recharger</button>');
}
return buf.join("");
};
});

;require.register("views/app_view", function(exports, require, module) {
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
});

;require.register("views/coach_view", function(exports, require, module) {
//var SectionView = require('./section');
var ReceiptCollection = require('../collections/receipts');

module.exports = StatsView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/coach'),
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


});

;require.register("views/control_view", function(exports, require, module) {
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


});

;require.register("views/stats_view", function(exports, require, module) {
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


});

;
//# sourceMappingURL=app.js.map