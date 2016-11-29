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
      when('/ShowOrders', {
	templateUrl: 'templates/show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/'
      });
}]);


sampleApp.controller('ResumeController', ['$scope', '$http', function($scope, $http) {

	$scope.message = 'This is Add new order screen';
    console.log("Hello World from controller");
    $http.get('/Website').success(function(response, type) {
        console.log("I got the data I requested.");
        $scope.objectList = response;
        console.log(response);
    });


}]);


sampleApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';

});
