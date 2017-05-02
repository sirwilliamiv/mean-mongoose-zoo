
const mongoose = require('mongoose');


const animalSchema = {
  name: String,
  species: String,
  age: Number

}



//pass in name of 1. model,  2. schema
const Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal
