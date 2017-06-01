var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/home', {
          templateUrl: '/views/home.html',
          controller: 'HomeController',
          controllerAs: 'hc'
        })
        .when ('/showroom', {
            templateUrl: '/views/showroom.html',
            controller: 'ShowroomController',
            controllerAs: 'sc'
        })
        .when ('/specific_rod', {
            templateUrl: '/views/specific_rod.html',
            controller: 'Specific_rodController',
            controllerAs: 'src'
        })
        .when ('/order', {
            templateUrl: '/views/order.html',
            controller: 'OrderController',
            controllerAs: 'oc'
        })
        .when ('/address', {
            templateUrl: '/views/address.html',
            controller: 'AddressController',
            controllerAs: 'ac'
        })
        .when ('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'ContactController',
            controllerAs: 'cc'
        })
        .when ('/custom_order', {
            templateUrl: '/views/custom_order.html',
            controller: 'Custom_orderController',
            controllerAs: 'coc'
        })
        .otherwise ( {
            redirectTo: '/home'
        });
}]);
