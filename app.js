(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


    /* CONTROLLERS */
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;


        toBuy.to_buy_list = ShoppingListCheckOffService.getItems();

        toBuy.removeItem = function(itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;

        alreadyBought.bought_list = ShoppingListCheckOffService.getBoughtItems();


    }

    /* SERVICES */
    function ShoppingListCheckOffService() {
        var service = this;
        var bought_list = [];
        var to_buy_list = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            }
        ];

        service.removeItem = function (itemIndex) {
            var item = to_buy_list[itemIndex];
            bought_list.push(item);
            to_buy_list.splice(itemIndex, 1);

        };

        service.getItems = function () {
            return to_buy_list;
        };
        service.getBoughtItems = function() {
            return bought_list;
        };

    }

})();
