var americano = require('americano');

var port = process.env.PORT || 9250;
console.log("port is ",port);

americano.start({name: 'mes-infos-nutritionelles', port: port});
