app.controller('AddAnimalCtrl', function($scope, AnimalFact){

  console.log("add animal control")

  $scope.add = () => {
    console.log("adding animal", $scope.newAnimal)
    AnimalFact.add($scope.newAnimal)
  }

})