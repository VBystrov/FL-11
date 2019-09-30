const express = require('express');
const deleteAuthorization = require('./middlewares/delete-authorization');
const cars = require('../db/data.json');

const router = express.Router();

router.use('/', deleteAuthorization);

router.post('/car', function(req, res) {
  const { id } = req.body;
  let carExists = false;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === id) {
      carExists = true;
    }
  }
  if (carExists) {
    res.status(409).send({ message: 'Car already exists.' });
  } else {
    cars.push(req.body);
    res.status(201).send(cars[cars.length - 1]);
  }
});

router.get('/car', function(req, res) {
  res.status(200).send(cars);
});

router.get('/car/:id', function(req, res) {
  let searchedCar = cars.filter(car => {
    if (car.id === parseInt(req.params.id)) {
      return true;
    }
  });
  if (searchedCar.length > 0) {
    res.status(200).send(searchedCar[0]);
  } else {
    res.status(404).send({ error: 'Car not found' });
  }
});

router.put('/car/:id', function(req, res) {
  let carExists = false;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === parseInt(req.params.id)) {
      carExists = true;
      Object.assign(cars[i], req.body);
      res.status(200).send(cars[i]);
    }
  }
  if (!carExists) {
    res.status(404).send({ error: 'Car not found' });
  }
});

router.delete('/car/:id', function(req, res) {
  let carExists = false;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === parseInt(req.params.id)) {
      carExists = true;
      cars.splice(i, 1);
      res.status(200).send({ message: 'The car has been successfully removed' });
    }
  }
  if (!carExists) {
    res.status(404).send({ message: 'Car not found' });
  }
});

module.exports = router;
