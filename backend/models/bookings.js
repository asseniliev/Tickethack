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
