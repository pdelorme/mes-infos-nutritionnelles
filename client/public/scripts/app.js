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

module.exports = Router = Backbone.Router.extend({

    routes: {
        '': 'main'
    },

    main: function() {
        var mainView = new AppView({
            collection: receipts
        });
        mainView.render();
    }
});
});

;require.register("templates/home", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<head><script src="Chart.js"> </script></head><h1>');
var __val__ = t('main title')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</h1><p>');
var __val__ = t('main description')
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</p><ul class="nav nav-tabs"><li class="active"> <a id="statsButton" data-toggle="tab"> Mes statistiques nutritionnels</a></li><li> <a id="coachButton" data-toggle="tab"> Analyse</a></li><li><a id="controlButton" data-toggle="tab"> Vérification</a></li></ul><div id="tab-content" class="tab-content"></div>');
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
buf.push('<H1>Stats</H1><div id="chartContainer" style="height: 300px; width: 100%;"></div><button type="button" class="btn btn-primary"> Recharger</button>');
}
return buf.join("");
};
});

;require.register("views/app_view", function(exports, require, module) {
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


});

;
//# sourceMappingURL=app.js.map