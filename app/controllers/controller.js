var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/Website').success(function(response, type) {
    console.log("I got the data I requested.");
    $scope.objectList = response;
    console.log(response);
});

$scope.adminPage = function() {
  console.log("hi");
};

}]);
