(function () {
'use strict';

var toBuyItems = [
  {
    itemName: "Banana",
    itemQuantity: "1"
  },
  {
    itemName: "Apples",
    itemQuantity: "2"
  },
  {
    itemName: "Oranges",
    itemQuantity: "3"
  },
  {
    itemName: "Chocolates",
    itemQuantity: "4"
  },
  {
    itemName: "Cookies",
    itemQuantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Items to buy Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrlr = this;

  buyCtrlr.items = ShoppingListCheckOffService.getBuyItems();

  buyCtrlr.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

//Items Bought controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrlr = this;

  boughtCtrlr.items = ShoppingListCheckOffService.getBoughtItems();

}

// The ShoppingListCheckOffService service
function ShoppingListCheckOffService() {
  var service = this;

  // List of items bought
  var boughtItems = [];

  // Remove Bought Items from toBuyItems
  service.removeItem = function (itemIdex) {
    boughtItems.push(toBuyItems.splice(itemIdex, 1)[0]);
  };

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.getBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})()
