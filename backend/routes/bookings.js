var express = require("express");
var router = express.Router();

const Booking = require('../models/bookings.js');


//Select all bookings
router.get('/', (req, res) => {
  Booking.find()
    .populate('selectedTrip')
    .then((data) => res.json({data}));
});

//63cfba6cd54d01ebd8051603

//Post a new booking in the database
router.post('/', (req, res) => {
  const newBooking = new Booking({
    selectedTrip: req.body.selectedTrip,
    buyingPrice: req.body.buyingPrice
  });

  console.log(req.body.buyingPrice);

  newBooking.save().then((data) => {res.json(data)});

});

module.exports = router;
