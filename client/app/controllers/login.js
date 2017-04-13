app.controller('LoginCtrl', function($scope, userFact){
  console.log('login controller')
  $scope.login = () => {
    console.log("you cliked the login button")
    userFact.login($scope.loginUser)
    .then(() => {
      console.log("logged in")
    })
  }

  $scope.register = () => {
    userFact.register($scope.loginUser)
    .then(() => {
      console.log("registered")
    })
  }
})