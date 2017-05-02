const { Router } = require('express');
const { json } = require('body-parser');
const mongoose = require('mongoose');
const Animal = require('../models/animal');

const router = Router();


// http://localhost:3000/api/zoo/addAnimal
// http://localhost:3000/api/zoo/
// http://localhost:3000/api/zoo/updateAnimal/:id
// http://localhost:3000/api/zoo/delete/:id
//

router.get('/', (req, res, next) => {
  Animal.find()
    .then((animals) => {
      res.json(animals)
    })
    .catch((err) => {
      console.log("finding animal err", err)
      return err
    })
})

router.post('/addAnimal', (req, res, next) => {
  let animal = req.body
  Animal.create(animal)
    .then((data) => {
      res.status(201).json(data)
    })
})

router.patch('/updateAnimal/:id', (req, res, next) => {
  // console.log("patch id", id)
  Animal.update(req.params.id, req.body, { upsert: true }, (err, doc) => {

    if (err) return res.send(500, { error: err });
    return res.status(200).send("succesfully saved yo Animal!");
  });
})


router.delete('/delete/:id', ( req, res, next) => {

  Animal.findOneAndRemove({ _id: req.params.id }).then((data) => {

    console.log("delete data", data)
    next()
  })
  .catch((err) =>{
    console.log("delete catcch", err)
    return err
  })

})

module.exports = router

//return res.send
