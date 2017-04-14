app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact){

  AnimalFact.getAll()
  .then((animals) => {
    $scope.animals = animals.animals
    $scope.$apply()
  })

  ZookeeperFact.getAll()
  .then((zookeepers) => {
    $scope.zookeepers = zookeepers.zookeepers;
    console.log("$scope.zookeepers", $scope.zookeepers)
    $scope.$apply()
  })

  resetCheckboxes = (arrayOfCheckboxes) => {
    for (var i = 0; i < arrayOfCheckboxes.length; i++) {
      arrayOfCheckboxes[i].checked = false
    }

  }

  $scope.addAnimal = () => {
    let selectedzookeepers = [];
    for (var i = 0; i < $scope.zookeepers.length; i++) {
      if($scope.zookeepers[i].checked){
        selectedzookeepers.push($scope.zookeepers[i]._id)
      }
    }
    console.log("checked zookeepers", selectedzookeepers)
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
    resetCheckboxes($scope.zookeepers)
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
    resetCheckboxes($scope.animals)

  }
})