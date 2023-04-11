(function () {
  'use strict'
  angular.module('MenuApp', ['ui.router']);
  angular.module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) { 
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
          url : '/',
          templateUrl : 'templates/home.template.html'
      })
      .state('categories', {
          url : '/categories', 
          templateUrl : 'templates/categories.template.html',
          controller : 'CategoriesController as catCtrl',
          resolve : {
              categories : ['MenuDataService', (MenuDataService) => { 
                  return MenuDataService.getAllCategories();
              }]
          }
      })
      //im not touching this with a ten foot poll anymore but if i ever have to see items or item
      //as a variable name again im going to puke
      .state('items', {
            url : '/items/{short_name}',
            templateUrl : 'templates/items.template.html', 
            controller : 'ItemController as itemctrl',
            resolve : {
                items : ['MenuDataService', '$stateParams', (MenuDataService, $stateParams) => {
                    return MenuDataService.getItemsForCategory($stateParams.short_name);
                }]
            }
        })
  }
})();