const express = require('express');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const routes = require('routes/routes');
const app = express();
mongoose.Promise = Promise;


app.use(json())
app.use(routes)



// app.get('/', (req, res, next) => {
//   Student.find()
//   .then((students) => {
//     res.json(students)
//   })
//   .catch((err) => {
//     console.log("finding student err", err)
//     return err
//   })
// })

// app.post('/addStudent', (req,res,next) => {
//   let student = req.body
//   Student.create(student)
//   .then( (data) => {
//     res.json(data)
//   })
// })
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/cohort17'

const PORT = process.env.PORT || 3000

mongoose.connect(MONGODB_URL).
then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
})
.catch( (err) => {
  console.log("server connect error with mongoose", err)
  return err
})
