var americano = require('americano');

var port = process.env.PORT || 9250;
console.log("port is ",port);

americano.start({name: 'mes-infos-nutritionelles', port: port}, 
    function(app, server) {
      // Init the watcher, after americano'setup.
      require('./server/models/receiptdetail').touch();
      require('./server/models/receipt').touch();
      require('./server/models/receiptstat').touch();
      require('./server/models/foodfact').touch();
    }
);
