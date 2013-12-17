americano = require('americano');

module.exports = FoodFact = americano.getModel('FoodFact', {
	name: String,
	code : String,
	aditives : [String],
	nurtiments : [String, String],
	traces : [String]
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

FoodFact.byBarcode = function(barcode, callback) {
	FoodFact.request(
        "byBarcode", 
        { key : barcode },
        function(err, instances) {
            callback(null, instances);
        }
    );
};
