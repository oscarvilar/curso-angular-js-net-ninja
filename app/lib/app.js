var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope',function ($scope) {

    $scope.eliminarUsuario = function (usuario){
        var usuarioEliminado = $scope.usuarios.indexOf(usuario);
        $scope.usuarios.splice(usuarioEliminado,1)
    }
    
    $scope.agregarUsuario = function (){
        $scope.usuarios.push({
            nombre: $scope.nuevoUsuario.nombre,
            cinturon: $scope.nuevoUsuario.cinturon,
            premio: parseInt($scope.nuevoUsuario.premio),
            disponible:true
        });

        $scope.nuevoUsuario.nombre = '';
        $scope.nuevoUsuario.cinturon = '';
        $scope.nuevoUsuario.premio = '';
    };

    $scope.usuarios = [
        {
            nombre:'Oscar',
            apellido: 'Vilar',
            premio: 300,
            disponible: true,
            cinturon: 'black',
            thumb: 'https://picsum.photos/300/300'

            
        },
        {
            nombre:'Antonio',
            apellido: 'Fernandez',
            premio: 200,
            disponible: true,
            cinturon: 'yellow',
            thumb: 'https://picsum.photos/300/300'
        },
        {
            nombre:'Pedro',
            apellido: 'Martinez',
            premio :350,
            disponible: false,
            cinturon: 'red',
            thumb: 'https://picsum.photos/300/300'
        },
        {
            nombre:'Juan',
            apellido: 'Alberto',
            premio: 250,
            disponible: true,
            cinturon: 'red',
            thumb: 'https://picsum.photos/300/300'
        },
    ];

}]);



// myApp.config(function () {

// });

// myApp.run(function () {

// });