app.factory('AnimalFact', function($http) { 

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`/api/allAnimals`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`/api/addAnimal`, newAnimal)
          .then((data) => {
            resolve(data.data.animals)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`/api/removeAnimal/${id}`)
          .then((data) => {
            //console.log("you deleted", data)
          })
      })
    } 
  }
});