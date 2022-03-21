var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope',function ($scope) {

    $scope.usuarios = [
        {
            nombre:'Oscar',
            apellido: 'Vilar',
            premio:27,
            disponible: true
        },
        {
            nombre:'Antonio',
            apellido: 'Fernandez',
            premio:24,
            disponible: false
        },
        {
            nombre:'Pedro',
            apellido: 'Martinez',
            premio:30,
            disponible: false
        },
        {
            nombre:'Juan',
            apellido: 'Alberto',
            premio:33,
            disponible: true
        },
    ];

}]);



// myApp.config(function () {

// });

// myApp.run(function () {

// });