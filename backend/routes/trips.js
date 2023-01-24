var express = require("express");
var router = express.Router();

const Trip = require('../models/trips');

router.get('/', (req, res) => {
  Trips.find()
       .then((data) => res.json({data}));
});

router.get('/:id', (req, res) => {
  Trips.findOne({id: id})
       .then((data) => res.json({data}));
});

module.exports = router;