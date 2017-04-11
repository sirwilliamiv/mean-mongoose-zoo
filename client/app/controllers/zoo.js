app.controller('ZooCtrl', function($scope, AnimalFact){
  console.log("here's the zoo controller")


const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      console.log("$scope.animals", $scope.animals )
      $scope.$apply()
    })
}

popPage()

  $scope.remove = (id) =>{
    console.log("the thing you want to delete is", id)
    AnimalFact.remove(id)
    popPage()
  }


})