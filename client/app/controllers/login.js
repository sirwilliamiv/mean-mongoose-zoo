app.controller('LoginCtrl', function($scope, userFact){
  console.log('login controller')
  $scope.login = () => {
    console.log("you cliked the login button")
  }

  $scope.register = () => {
    console.log("you cliked the register button")
  }
})