app.controller('ZooCtrl', function($scope, AnimalFact){

$scope.editing = false

const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      $scope.$apply()
    })
}

popPage()

$scope.remove = (id) => {
  AnimalFact.remove(id)
  popPage()
}

$scope.save = (id, updateInfo) => {
  console.log("updateInfo", updateInfo)
  AnimalFact.update(id, updateInfo)
  .then(() => {
    editing = false;
    popPage()
  })
}


})