app.controller('ZooCtrl', function($scope, animalFact){
  console.log("here's the zoo controller")

  $scope.animals = animalFact.getAll
})