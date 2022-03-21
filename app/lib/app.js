var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope',function ($scope) {

    $scope.eliminarUsuario = function (usuario){
        var usuarioEliminado = $scope.usuarios.indexOf(usuario);
        $scope.usuarios.splice(usuarioEliminado,1)
    }

    $scope.usuarios = [
        {
            nombre:'Oscar',
            apellido: 'Vilar',
            premio: 300,
            disponible: true,
            cinturon: 'black'

            
        },
        {
            nombre:'Antonio',
            apellido: 'Fernandez',
            premio: 200,
            disponible: true,
            cinturon: 'yellow'
        },
        {
            nombre:'Pedro',
            apellido: 'Martinez',
            premio :350,
            disponible: false,
            cinturon: 'red'
        },
        {
            nombre:'Juan',
            apellido: 'Alberto',
            premio: 250,
            disponible: true,
            cinturon: 'red'
        },
    ];

}]);



// myApp.config(function () {

// });

// myApp.run(function () {

// });