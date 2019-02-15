var express = require('express');
var router = express.Router();
var controller = require('../controllers')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/', function(req, res, next) {
    controller.putCoin(req, res, next);
});

router.delete('/', function(req, res, next) {
    controller.returnCoin(req, res, next);
});

router.get('/inventory', function(req, res, next) {
 	controller.productList(req, res, next);
});

router.get('/inventory/:id', function (req, res, next) {
    console.log('product Id requested:', req.params.id);
    controller.productByID(req, res, next);
    next();
});

router.put('/inventory/:id', function (req, res, next) {
    //Test: curl -i -X PUT  http://localhost:3000/inventory/3 
    console.log('product Id requested:', req.params.id);
    controller.productBuy(req, res, next);
    next();
}); 

module.exports = router;