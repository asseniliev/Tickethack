var express = require("express");
var router = express.Router();

const Booking = require('../models/bookings.js');

router.get('/', (req, res) => {
  Booking.find()
       .then((data) => res.json({data}));
});

//63cfba6cd54d01ebd8051603

router.post('/', (req, res) => {
  const newBooking = new Booking({
    selectedTrip: req.body.selectedTrip,
    buyingPrice: req.body.buyingPrice
  });

  console.log(newBooking);

  newBooking.save().then((data) => {res.json(data)});

});

module.exports = router;