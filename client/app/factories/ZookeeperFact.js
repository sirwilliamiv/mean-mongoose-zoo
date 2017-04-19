app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/allZookeepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/addZookeeper`, newZookeeper)
          .then((data) => {
            resolve(data.data.zookeepers)
          })
        })
    }
  }
})