(function() { 
  'use strict'
  angular.module('MenuApp')
  .controller('ItemController', ItemController);
  ItemController.$inject = ['items'];
  function ItemController(items) {
      var itemctrl = this;
      itemctrl.items = items.data.menu_items;
  }
})();