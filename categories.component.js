//Create categories.component.js file and create component called categories that shows all available categories 
//in the menu to the user.
(function() {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'categories.html',
        bindings: {
            items: "<"
        }
    })

    
})();