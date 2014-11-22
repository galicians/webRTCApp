'use strict';

// Declare app level module which depends on filters, and services

var busuuApp = angular.module('myApp', [
  'ngRoute',
  'myControllers',
  'myServices'
])

busuuApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
  when('/home', {
    controller: 'oneCtrl'
  }).
  when('/view2', {
    templateUrl: 'partials/partial2.html',
    controller: 'MyCtrl2'
  }).
  otherwise({
    redirectTo: '/home'
  });

}]);