//Create menudata.service.js file and create a service called MenuDataService in it. This service should be declared on the data module
//, not on the MenuApp module. The MenuDataService should have 2 methods:

// getAllCategories - this method should return a promise which is a result of using the $http service,
// using the following REST API endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)

// getItemsForCategory(categoryShortName) - this method should return a promise which is a result of using the $http service,
//  using the following REST API endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json, 
//  where, before the call to the server, your code should append whatever categoryShortName value was passed in as an argument 
//  into the getItemsForCategory method.

(function() {
    'use strict';
angular.module('menuDataService', [])
  .service('menuDataService', function($http) {
    this.getAllCategories = function() {
      return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
      .then(function (response){
        return response.data;
      });
      //looks like this has a few key values id, name,short_name, and special_instructions
    };

    this.getItemsForCategory = function(categoryShortName) {
        return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json')
        .then(function (response){
            return response.data;
          });
      };
  });
})();