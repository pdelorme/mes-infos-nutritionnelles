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
        '': 'info',
        'info': 'info',
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
    
    info: function(){
    	if(!this.mainView)
    		this.main();
    	this.mainView.infoView();
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
buf.push('coach');
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
var MesInfoNutritionelles = ("<strong> <span style='font-style:italic'>Mes Infos</span> Nutritionnelles</strong>");
var OpenFoodFacts = ("<strong><span style='color:red'>Ope</span><span style='color:orange'>nFoo</span><span style='color:green'>dFac</span><span style='color:blue'>ts</span></strong>");
buf.push('<div class="col-md-9"><H2> Ecran de controle</H2><p>Ce formulaire vous permet de lister les produits dont les informations nutritionnelles n\'ont pas été saisies dans la base de données ' + ((interp = OpenFoodFacts) == null ? '' : interp) + '.<br/>\nles informations saisies ici seront envoyées à ' + ((interp = OpenFoodFacts) == null ? '' : interp) + ' pour réutilisation par d\'autre personnes du panel MesInfos et plus généralement par tous les utilisateurs de la base de donnée ouverte ' + ((interp = OpenFoodFacts) == null ? '' : interp) + '.<br/>\nMerci de saisir les données nutritionnelles avec soins.</p></div><div class="col-md-3 text-center"><img src="openfoodfacts-logo-fr.png"/></div><div class="col-md-12"><form role="form" action="postFoodfacts" method="post"><table class="table table-striped table-hover table-condensed"><thead><th colspan="5"><button type="submit" class="btn btn-primary">Envoyer les modifications</button></th></thead><thead><th>code barre</th><th class="col-md-4">nom de l\'article</th><th class="col-md-1 text-center">poid<br/>(Grammes)</th><th class="col-md-1 text-center">calories <br/>(KJoules)</th><th class="col-md-1 text-center">lipides <br/>(Grammes)</th><th class="col-md-1 text-center">proteines <br/>(Grammes)</th><th class="col-md-1 text-center">glucides <br/>(Grammes)</th><th class="col-md-1">dernière date d\'achat</th></thead><tbody id="products-body"></tbody><tfoot><td colspan="5"><button type="submit" class="btn btn-primary">Envoyer les modifications</button></td></tfoot></table></form></div><script id="template-row" type="text/html"><tr><td style="vertical-align:middle"> <img src="http://drive.intermarche.com/ressources/images/produit/vignette/0<%= barcode %>.jpg" width="53" height="53" title="code barre : <%= barcode %>&#10;Libellé Intermarché : <%= shop_label %>" alt="<%= shop_label %>" class="image"/></td><td width="100%"><input name="changed_<%= barcode %>" type="hidden" value="false"/><input name="name_<%= barcode %>" type="text" placeholder="Nom de l\'article" value="<%= name?name:\'\' %>" width="100%" class="form-control"/></td><td><div class="input-group"><input name="weight_<%= barcode %>" type="text" placeholder="poid" value="<%= (typeof weight != \'undefined\')?weight:\'\' %>" class="form-control"/><span class="input-group-addon"><%= weightUnit %></span></div></td><td><div class="input-group"><input name="energy_<%= barcode %>" type="text" placeholder="energy" value="<%= (typeof energy != \'undefined\')?energy:\'\' %>" class="form-control"/><span class="input-group-addon">Kj</span></div></td><td><div class="input-group"><input name="fat_<%= barcode %>" type="text" placeholder="lipides" value="<%= (typeof fat != \'undefined\')?fat:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td><div class="input-group"><input name="proteins_<%= barcode %>" type="text" placeholder="protéines" value="<%= (typeof proteins != \'undefined\')?proteins:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td><div class="input-group"><input name="carbohydrates_<%= barcode %>" type="text" placeholder="glucides" value="<%= (typeof carbohydrates != \'undefined\')?carbohydrates:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td style="vertical-align:middle"><%= new Date(last_update).toLocaleDateString() %></td></tr></script>');
}
return buf.join("");
};
});

;require.register("templates/data", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var MesInfoNutritionelles = ("<strong>Mes Infos <span style='font-style:italic'>Nutritionnelles</style></strong>");
var OpenFoodFacts = ("<strong><span style='color:red'>Ope</span><span style='color:orange'>nFoo</span><span style='color:green'>dFac</span><span style='color:blue'>ts</span></strong>");
buf.push('<div><script id="header" type="text/html"><div class="col-md-12"><H2> <span>Détail des achats du <%= new Date(day).toLocaleDateString() %></span></H2><p>Vous pouvez voir et corriger ici les infos nutritionnelles associées au ticket de caisse selectionné.<br/>\nLes informations saisies ici seront envoyées à ' + ((interp = OpenFoodFacts) == null ? '' : interp) + ' pour réutilisation par d\'autre personnes du panel MesInfos et plus généralement par tous les utilisateurs de la base de données ouverte ' + ((interp = OpenFoodFacts) == null ? '' : interp) + '.<br/>\nMerci de saisir les données nutritionnelles avec soin.\nLes statisiques ' + ((interp = MesInfoNutritionelles) == null ? '' : interp) + ' seront mises à jour immédiatement après correction.<br/></p></div><div class="col-md-12"><form role="form" action="postFoodfacts" method="post"><div class="pull-right"><br><input type="image" src="bout_envoyer.jpg" alt="Envoyer les modifications"/><br><br></div><table class="table table-striped table-hover table-condensed"><thead><th class="col-md-0">Code barre</th><th class="col-md-7">Nom de l\'article</th><th class="col-md-1 text-center"> <img src="picto_poids.png"/><br/>Poid&nbsp;(g)</th><th class="col-md-1 text-center"> <img src="picto_calories.png"/><br/>Calories&nbsp;(Kj)</th><th class="col-md-1 text-center"> <img src="picto_calories.png"/><br/> Lipides&nbsp;(g)</th><th class="col-md-1 text-center"> <img src="picto_proteines.png"/><br/>Proteines&nbsp;(g)</th><th class="col-md-1 text-center"> <img src="picto_glucides.png"/><br/>Glucides&nbsp;(g)</th></thead><tbody id="products-body"></tbody></table><div class="pull-right"><br><br><input type="image" src="bout_envoyer.jpg" alt="Envoyer les modifications"/></div></form></div></script><script id="template-row" type="text/html"><tr><td style="vertical-align:middle"> <img src="http://drive.intermarche.com/ressources/images/produit/vignette/0<%= barcode %>.jpg" width="53" height="53" title="code barre : <%= barcode %>&#10;Libellé Intermarché : <%= shop_label %>" alt="<%= shop_label %>" class="image"/></td><td><input name="changed_<%= barcode %>" type="hidden" value="false"/><input name="name_<%= barcode %>" type="text" placeholder="Nom de l\'article" value="<%= name?name:\'\' %>" class="form-control"/></td><td><div class="input-group"><input name="weight_<%= barcode %>" type="text" placeholder="poid" value="<%= (typeof weight != \'undefined\')?weight:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td><div class="input-group"><input name="energy_<%= barcode %>" type="text" placeholder="energy" value="<%= (typeof energy != \'undefined\')?energy:\'\' %>" class="form-control"/><span class="input-group-addon">Kj</span></div></td><td><div class="input-group"><input name="fat_<%= barcode %>" type="text" placeholder="lipides" value="<%= (typeof fat != \'undefined\')?fat:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td><div class="input-group"><input name="proteins_<%= barcode %>" type="text" placeholder="protéines" value="<%= (typeof proteins != \'undefined\')?proteins:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td><td><div class="input-group"><input name="carbohydrates_<%= barcode %>" type="text" placeholder="glucides" value="<%= (typeof carbohydrates != \'undefined\')?carbohydrates:\'\' %>" class="form-control"/><span class="input-group-addon">g</span></div></td></tr></script></div>');
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
buf.push('<div id="loader"><img src="loader.gif" alt="je charge"/></div><nav role="navigation" class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#info" class="navbar-brand">MesInfos Nutritionelles</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li id="statsMenuItem"><a href="#stats"> Mes Statistiques</a></li><li id="controlMenuItem"><a href="#control"> Vérifications</a></li><li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">A Propos<ul class="dropdown-menu"><li> <a>&copy; 2013 Lookal</a></li><li> <a href="mail:pdelorme@lookal.fr">contact: pdelorme@lookal.fr</a></li><li> <a>Merci à la Fing et à OpenFoodFacts pour leur assistance.<br/>\nLongue vie à mes infos</a></li></ul></a></li></ul></div></div></nav><div id="tab-content"></div>');
}
return buf.join("");
};
});

;require.register("templates/info", function(exports, require, module) {
module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var MesInfoNutritionelles = ("<strong> <span style='font-style:italic'>Mes Infos</span> Nutritionnelles</strong>");
var OpenFoodFacts = ("<strong><span style='color:red'>Ope</span><span style='color:orange'>nFoo</span><span style='color:green'>dFac</span><span style='color:blue'>ts</span></strong>");
buf.push('<div class="col-md-7"><H2>Bienvenue sur MesInfos Nutritionelles</H2><p>' + ((interp = MesInfoNutritionelles) == null ? '' : interp) + ' vous permet de suivre votre nutrition en se basant directement sur vos tickets d\'achat Intermarché.<br/>\nElle vous permet de suivre votre consommation en calories, protides, lipides, glucides à la source sans avoir à peser quotidiennement vos aliments pour faire un suivi nutritionnel précis.</p></div><div class="col-md-5 text-center"><img src="logo.png"/></div><br/><div class="col-md-3 text-center"><img src="openfoodfacts-logo-fr.png"/></div><div class="col-md-9"><H2>OpenFoodFact</H2><p>' + ((interp = MesInfoNutritionelles) == null ? '' : interp) + ' fonctionne en croisant vos informations d\'achat avec la base de données ouverte ' + ((interp = OpenFoodFacts) == null ? '' : interp) + '. <br/>\nCette base de données référence les données nutritionnelles de dizaines de milliers d\'articles de consommation courante. <br/>\nCependant elle ne recense pas tous les produits et l\'application ' + ((interp = MesInfoNutritionelles) == null ? '' : interp) + ' vous permet d\'ajouter vos articles le plus simplement du monde à la base de données ' + ((interp = OpenFoodFacts) == null ? '' : interp) + ' afin de pouvoir en bénéficier dans vos statistiques de consommation.<br/>\nLes informations nutritionnelles saisies par vous sont immédiatement accessible aux autres utilisateurs de l\'application ' + ((interp = MesInfoNutritionelles) == null ? '' : interp) + ' ainsi qu\'à tous les utilisateurs de la base ' + ((interp = OpenFoodFacts) == null ? '' : interp) + '. </p></div>');
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
var MesInfoNutritionelles = ("<strong> <span style='font-style:italic'>Mes Infos</span> Nutritionnelles</strong>");
var OpenFoodFacts = ("<strong><span style='color:red'>Ope</span><span style='color:orange'>nFoo</span><span style='color:green'>dFac</span><span style='color:blue'>ts</span></strong>");
{
buf.push('<div class="header"><div class="container"><div class="row"><div class="col-md-9"><H2> <span>Statistiques d\'achat nutritionnelles</span></H2><p class="col-md-7">Ce diagramme montre les calories, protéines, lipides et glucides par date d\'achat et étalés dans le temps.<br/>\nEn cliquant sur une date, vous pourrez voir la liste des achats du jour et vérifier/compléter les informations nutritionnelles de chaque produit afin de corriger votre diagramme.</p></div><div class="col-md-3 text-center"><img src="logo_mes_infos.png" class="logo"/></div></div><div class="row"><br/></div></div></div><div id="chartContainer" class="content"><div class="container"><br><br><div class="row"><div class="col-md-12 chart"><div class="col-md-6"><div id="chartEnergyContainer"></div></div><div class="col-md-6"><div id="chartNutritionContainer"></div></div></div><div class="col-md-12"><div class="col-md-6"><div class="text-center"> <img src="titre_energie.png"/></div><br/></div><div class="col-md-6"><div class="text-center"> <img src="titre_compo_nutri.png"/></div></div></div></div></div></div><div class="container"><div class="row"><div id="dataContainer"></div></div></div>');
}
}
return buf.join("");
};
});

;require.register("views/app_view", function(exports, require, module) {
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
    },

    render: function() {
        // we render the template
        this.$el.html(this.template());

    },

    infoView: function(event) {
    	$("#loader").show();
    	this.activateMenu("#infoMenuItem");
        // render the stats view
        infoView = new InfoView();
        infoView.render();
        this.$el.find('#tab-content').html(infoView.$el);
        $("#loader").hide();
    },
    
    statsView: function(event) {
    	$("#loader").show();
    	this.activateMenu("#statsMenuItem");
    	// render the stats view
    	statsView = new StatsView();
    	statsView.render();
    	this.$el.find('#tab-content').html(statsView.$el);
    	$("#loader").hide();
    },
    
    coachView:function(event){
    	$("#loader").show();
    	this.activateMenu("#coachMenuItem");
		coachView = new CoachView();
	    coachView.render();
	    this.$el.find('#tab-content').html(coachView.$el);
        $("#loader").hide();
    },
    
    controlView:function(event){
    	$("#loader").show();
    	this.activateMenu("#controlMenuItem");
		controlView = new ControlView();
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

module.exports = ControlView = Backbone.View.extend({

    tagName: 'div',
    template: require('../templates/control'),
    events: {
    	"submit form":"postData",
    	"change input.form-control" : "formChange"
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template());
        var that = this;
        // async to allow proper refresh.
        setTimeout(function(){
        	that.getData();
        },0);        
    },
    
    getData: function(){
    	$("#loader").show();
    	// asks server for product without infos.
    	var that = this;
    	var productBody = this.$el.find("#products-body");
    	productBody.html("");
    	var productRowTemplate = _.template(this.$el.find("#template-row").html());
    	$.getJSON('invalidProducts', function(data) {
        	productBody.html("");
    		$.each(data, function(key, val) {
    			productBody.append(productRowTemplate(val));
    		});
        	$("#loader").hide();
    	});
    },
    
    postData: function(e){
    	$("#loader").show();
    	e.preventDefault();
    	var formData = $("form").serialize();
    	var productBody = this.$el.find("#products-body");
    	var productRowTemplate = _.template(this.$el.find("#template-row").html());
    	var that = this;
    	
    	$.ajax({
		  type: "POST",
		  url: 'postFoodfacts',
		  data: formData,
		  dataType: "json",
          beforeSend: function(){$("#modal-overlay").show();},
          complete: function(){$("#modal-overlay").hide();},
		  success: function(data) {
	        	that.getData();
	    	},
		});
    },
    formChange: function(e){
    	var id = e.target.name.split('_')[1];
    	$("[name='changed_"+id+"']").val("true");
    }
    
});


});

;require.register("views/data_view", function(exports, require, module) {
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
    			productBody.append(productRowTemplate(val));
    		});
        	$("#loader").hide();
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
			  that.getData();
			  that.statsView.updateChart();
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


});

;require.register("views/info_view", function(exports, require, module) {
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


});

;require.register("views/stats_view", function(exports, require, module) {
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


});

;
//# sourceMappingURL=app.js.map