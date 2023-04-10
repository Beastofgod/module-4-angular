//Create routes.js file and configure your routes and view states in it. These routes should be defined in the MenuApp module.

//this is a template generated by chatgpt add and subtract to this file at will
(function() {
    'use strict';
  
    angular.module('MenuApp', ['ui.router']);
    angular.module('MenuApp')
      .config(RoutesConfig);
  
      RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
      function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        // Redirect to home page if no other URL matches
          $urlRouterProvider.otherwise('/');
          //$locationProvider.html5Mode(true);
          $stateProvider
  
      // Set up UI states
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html',
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'categories.html',
          controller: 'CategoriesController as catCtrl',
          resolve: {
            // Define resolves here
          }
        })
        .state('items',{
            url: '/items',
            templateUrl: 'items.html',
            controller: 'ItemsController as itmCtrl',
            params: {},
            resolve: {
              // Define resolves here
            }
        });
    }
  
  })();