var express = require("express");
const { route } = require("../app.js");
var router = express.Router();

const Bookings = require('../models/bookings.js');

router.get('/', (req, res) => {
  Bookings.find()
       .then((data) => res.json({data}));
});

router.post('/', (req, res) => {
  const newBooking = new Bookings({
    selectedTrip: req.selectedTrip,
    buyingPrice: req.buyingPrice
  });

  newBooking.save().then(() => {});

});