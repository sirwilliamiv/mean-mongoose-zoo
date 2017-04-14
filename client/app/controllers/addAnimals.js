app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact){

  AnimalFact.getAll()
  .then((animals) => {
    $scope.animals = animals.animals
    $scope.$apply()
  })

  $scope.addAnimal = () => {
    AnimalFact.add($scope.newAnimal)
    $scope.newAnimal = {}
  }

  $scope.addZookeeper = () => {
    let selectedAnimals = [];
    for (var i = 0; i < $scope.animals.length; i++) {
      if($scope.animals[i].checked){
        selectedAnimals.push($scope.animals[i]._id)
      }
    }
    $scope.newZookeeper.animals = selectedAnimals;
    ZookeeperFact.add($scope.newZookeeper)
    $scope.newZookeeper = {}
  }
})