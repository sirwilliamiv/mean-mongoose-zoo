app.factory('AnimalFact', function($http) { 
  console.log("animal factory"); 

  return {
    getAll: function() {
      console.log("getting all animals")
        return new Promise((resolve, reject) =>{
          $http.get(`/api/allAnimals`)
            .then((data) => {
              console.log("AnimalFact data received", data)
              resolve(data.data)
            })
        })
      },
    add: function(newAnimal) {
      console.log("adding new animal from factory", newAnimal)
      return new Promise((resolve, reject) =>{
        $http.post(`/api/addAnimal`, newAnimal)
          .then((data) => {
            console.log("AnimalFact data set", data)
            resolve(data.data.animals)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`/api/removeAnimal/${id}`)
          .then((data) => console.log("animal deleted", data))
      })
    } 
  }
});