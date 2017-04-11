app.controller('ZooCtrl', function($scope, AnimalFact){

const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      $scope.$apply()
    })
}

popPage()

  $scope.remove = (id) =>{
    AnimalFact.remove(id)
    popPage()
  }


})