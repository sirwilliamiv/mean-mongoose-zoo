const express = require('express');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
mongoose.Promise = Promise;


app.use(json())

app.use('/api/zoo/', routes)



const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/mongozoo'

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
