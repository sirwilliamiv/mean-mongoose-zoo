app.factory('AnimalFact', function($http) { 

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/allAnimals`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/addAnimal`, newAnimal)
          .then((data) => {
            resolve(data.data.animals)
          })
        })
    },

    remove: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:3000/api/removeAnimal/${id}`)
          .then((data) => {
            //console.log("you deleted", data)
          })
      })
    },

    update: (id, updateInfo) => {
      console.log("id that made it to the factory", id)
      return new Promise((resolve, reject) => {
        $http.patch(`http://localhost:3000/api/updateAnimal/${id}`, updateInfo)
        .then((data) => {
          console.log("animal updated", data)
        })
        .catch((err) => console.log("err:", err))
      })
    } 
  }
});