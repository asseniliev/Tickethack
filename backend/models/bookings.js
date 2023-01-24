<<<<<<< HEAD
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


=======
const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
	selectedTrip: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "trips",
	},
	buyingPrice: Number,
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
>>>>>>> e9887b70bcbfb7dc761c86b019ad5a35dbb6a90d
