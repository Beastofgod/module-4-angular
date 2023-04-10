(function() {
    'use strict';

    angular.module("MenuApp")
    .controller("ItemsController", ItemsController);

  ItemsController.$inject = ["$stateParams", "items"];
  function ItemsController($stateParams, items) {
    var itmCtrl = this;

    itmCtrl.items = items;
  }
    
})();