var config = require('../config');
var self = module.exports = {

  get_product : function(productID,callback)  {
    var err = null;
    var data = [];
    for(var product=0; product < config.products.length; product++) {    
        if(typeof(config.products[product].id)!=='undefined'){
            if(productID==="" || (productID && productID !== "" && config.products[product].id==productID)){
                console.log('product id requested: '+config.products[product].id);
                data.push(config.products[product]);
            }
        }
    }      
    if(err) {
        console.log(err);
      } else {
        //console.log(data);
      }
      callback(err,data);
    }
}