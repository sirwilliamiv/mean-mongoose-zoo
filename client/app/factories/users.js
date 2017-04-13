app.factory('userFact', ($http) => {
  return {
    register: (loginInfo) => {
      return new Promise((resolve, reject) => {
        $http.post('/api/register', loginInfo)
        .then((data) => {
          resolve(data)
        })
        .catch((err) =>{
          console.log("error from factory:", err)
        })
      })
    },

    login: (loginInfo) => {
      console.log("loginInfo from factory", loginInfo)
      return new Promise((resolve, reject) => {
        $http.post(`/api/login`, loginInfo)
        .then((data) => {
          console.log("logged in from factory")
          resolve(data)
        })
        .catch((err) => {
          console.log("err from factory:", err)
        })
      })
    }
  }
})