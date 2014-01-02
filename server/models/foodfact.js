americano = require('americano');

module.exports = FoodFact = americano.getModel('FoodFact', {
	name: String,
	barcode : String,
	// nutriments : [String, String],
	energy: Number,
	energy_unit: String,
	shop_label:String,
	last_update: Date
});

FoodFact.all = function(callback) {
	FoodFact.request(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.truncate = function(callback) {
	FoodFact.requestDestroy(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.byBarcode = function(barcode, callback) {
	FoodFact.request(
        "bybarcode", 
        { key : ""+barcode },
        function(err, instances) {
            callback(null, instances);
        }
    );
};

FoodFact.invalidProducts = function(callback) {
	FoodFact.request(
        "invalidProducts", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};
