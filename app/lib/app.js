var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope',function ($scope) {

    $scope.message = 'Hello World';
    $scope.colores = ['rojo','amarillo','verde','azul'];

}]);



myApp.config(function () {

});

myApp.run(function () {

});