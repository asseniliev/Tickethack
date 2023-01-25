var express = require("express");
var router = express.Router();

const Trip = require('../models/trips');

//Retrieve trips following filter parameters

router.get('/', (req, res) => {
  Trip.find()
       .then((data) => res.json({data}));
});

//Select route by route id
router.get('/:id', (req, res) => {
  Trip.findOne({_id: req.params.id})
       .then((data) => res.json({data}));
});

module.exports = router;