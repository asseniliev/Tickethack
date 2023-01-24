var express = require("express");
var router = express.Router();

<<<<<<< HEAD
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
=======
const Bookings = require("../models/bookings.js");

router.get("/", (req, res) => {
	Bookings.find().then((data) => res.json({ data }));
});

router.post("/", (req, res) => {
	const newBooking = new Bookings({
		selectedTrip: req.selectedTrip,
		buyingPrice: req.buyingPrice,
	});

	newBooking.save().then(() => {});
});
>>>>>>> 7aa2418782ceb33bff0315f687ca3b612478b8a3
