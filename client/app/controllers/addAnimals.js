app.controller('AddAnimalCtrl', function($scope, AnimalFact){

  $scope.add = () => {
    AnimalFact.add($scope.newAnimal)
    $scope.newAnimal = {}
  }

})