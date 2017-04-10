app.factory('AnimalFact', function($http) { 
  console.log("animal factory"); 

  return {
    getAll: function() {
      console.log("getting all animals")
        return new Promise((resolve, reject) =>{
          $http.get(`/api/allAnimals`)
            .then((data) => {
              console.log("AnimalFact data", data)
              res(data.data)
            })
        })
      } 
    }
});