ReceiptDetail = require('../models/receiptdetail')

module.exports.list = function(req, res) {
  ReceiptDetail.all(function(err, instances) {
    if(err != null) {
      res.send(500, "An error has occurred -- " + err);
    }
    else {
      data = {"receiptDetails": instances};
      html = render(data);
      res.send(200, html);
    }
  });
};

function render(data) {

    receiptDetailsHtml = ''
    for (idx in data.receiptDetails) {
        receiptDetail = data.receiptDetails[idx];
        receiptDetailsHtml +=
'        <div class="col-md-6">\n' +
'          <div class="thumbnail row">\n' +            
'            <div class="col-md-2 text-center">\n' +
'              <img class="img-responsive" src="' +
          'http://drive.intermarche.com/ressources/images/produit/vignette/0' + receiptDetail.barcode + '.jpg"/>\n' + 
'              <h4>' + receiptDetail.price + ' €</h4>\n' +
'            </div>\n' +
'            <div class="col-md-10">\n' +
'              <h4>' + receiptDetail.label + '</h4>\n' +
'              <p>' + receiptDetail.sectionLabel + 
           ' &gt; ' + receiptDetail.familyLabel + ' &gt; ' +
          '<small>' + receiptDetail.barcode + '</small></p>\n' +
'              <p>' + receiptDetail.amount + ' X , Le ' + receiptDetail.timestamp.toDateString() + '</p>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' ;

    }

    header = 
'<!DOCTYPE html>\n' +
'<html>\n' +
'  <head>\n' +
'    <meta charset="utf-8">\n' +
'    <title>Mes caddies !</title>\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +

'    <!-- Bootstrap -->\n' +
'    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" media="screen">\n' +
'  </head>\n' +
'  <body>\n' +
'    <div class="container">\n' +
'      <h1>Mes caddies !</h1>\n' +
'      <div class="row">\n' ;


    footer = 
'      </div>\n' +
'    </div>\n' +

'    <!-- jQuery (necessary for Bootstrap s JavaScript plugins) -->\n' +
'    <script src="http://code.jquery.com/jquery.js"></script>\n' +
'    <!-- Latest compiled and minified JavaScript -->\n' +
'    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>\n' +
'  </body>\n' +
'</html>\n'


    return header + receiptDetailsHtml + footer ;
}

