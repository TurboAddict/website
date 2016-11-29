//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Resume', {
	templateUrl: 'resume.html',
	controller: 'ResumeController'
      }).
      when('/', {
	templateUrl: 'main.html',
	controller: 'MainController'
      }).
      when('/Login', {
	templateUrl: 'login.html',
	controller: 'LoginController'
      }).
      when('/Contact', {
	templateUrl: 'contact.html',
	controller: 'ContactController'
      }).
      otherwise({
	redirectTo: '/'
      });
}]);


sampleApp.controller('ResumeController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    $http.get('/app').success(function(response, type) {
        console.log("I got the data I requested.");
        $scope.objectList = response;
    });
}]);


sampleApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    $http.get('/app').success(function(response, type) {
        console.log("I got the data I requested.");
        $scope.objectList = response;
    });
}]);

sampleApp.controller('ContactController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    $http.get('/app').success(function(response, type) {
        console.log("I got the data I requested.");
        $scope.objectList = response;
    });
}]);

sampleApp.controller('LoginController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    $http.get('/app').success(function(response, type) {
        console.log("I got the data I requested.");
        $scope.objectList = response;
    });
}]);
