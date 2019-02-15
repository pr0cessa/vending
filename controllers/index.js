var models = require('../models');
var config = require('../config');
var self = module.exports = {

	productList : function(req, res, next)	{
		var productID = "";
		models.get_product(productID,function(err,data){
			res.send({
				status : 200,
				status_message : "Success Listing Inventory",
				data : data
			});
		})
    },
    
	productByID : function(req, res, next)	{
		var productID = req.params.id;
		models.get_product(productID,function(err,data){
			res.send({
				status : 200,
				status_message : "Success Fetching Inventory Product by ID",
				data : data
			});
		})
    },
    
	productBuy : function(req, res, next)	{
        var productID = req.params.id;
        var xCoins = 0;
        var xInventoryRemaining = 0;
        var quantityVended = 0;
        if(config.coinsAccepted<2){
            xCoins = 2 - config.coinsAccepted;
        }
  
		models.get_product(productID,function(err,data){
            var quantity = data[0].quantity;
            var status = 200;
            if(quantity > 0 && xCoins<=0){
                //there's a product remaining and enough money was put in
                quantityVended = 1;
                xInventoryRemaining = quantity - quantityVended;
                //update config
                for(var product=0; product < config.products.length; product++) {    
                    if(typeof(config.products[product].id)!=='undefined'){
                        if(productID && productID !== "" && config.products[product].id==productID){
                            console.log('updating product quantity: '+config.products[product].id);
                            config.products[product].quantity = xInventoryRemaining;
                        }
                    }
                } 
                config.productsPurchased +=1;
                res.setHeader('X-Inventory-Remaning', xInventoryRemaining);
            }
            else if(quantity <=0){
                //out of stock
                status = 404;

            }
            else if (quantity > 0 && xCoins>0){
                //produxt in stock, but not enough funds added
                status = 403;
            }
            res.setHeader('X-Coins', xCoins);
            res.status(status).send({
				status_message : "Put/Purchase Product by ID",
				data : data
			});
		})
    },
    
	putCoin : function(req, res, next)	{
        var request = req.body;
        var xCoins = 0;
        if(typeof(request.coin)=='undefined'||request.coin<=0){
        }
        else {
            xCoins = request.coin;
            config.coinsAccepted += 1;
        }
        console.log('coinsAccepted updated: '+config.coinsAccepted);
		res.setHeader('X-Coins', xCoins);
        res.status(204).send({
            status_message : "Accepted Coin ",
            data : data
        });
		
    },
    
    returnCoin : function(req, res, next)	{
        var xCoins = 0;
        var coinsNeeded = config.productsPurchased * 2;
        var change = config.coinsAccepted - coinsNeeded;
        if(change > 0){
            xCoins = change;
        }

        config.coinsAccepted = 0;
        config.productsPurchased = 0;
        
        console.log('Returning all coins... coinsaccepted updated: '+config.coinsAccepted);
		res.setHeader('X-Coins', xCoins);
        res.status(204).send({
            status_message : "Returned coins ",
            data : data
        });
	}   
}