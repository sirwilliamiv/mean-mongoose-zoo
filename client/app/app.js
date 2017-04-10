const app = angular.module('Zoo', ['ngRoute'])

console.log("here's your zoo app")

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
}])