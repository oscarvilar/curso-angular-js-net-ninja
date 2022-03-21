var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope',function ($scope) {

    $scope.usuarios = [
        {
            nombre:'Oscar',
            apellido: 'Vilar',
            premio:27
        },
        {
            nombre:'Antonio',
            apellido: 'Fernandez',
            premio:24
        },
        {
            nombre:'Pedro',
            apellido: 'Martinez',
            premio:30
        },
        {
            nombre:'Juan',
            apellido: 'Alberto',
            premio:33
        },
    ];

}]);



// myApp.config(function () {

// });

// myApp.run(function () {

// });