const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    selectedTrip : mongoose.Schema.Types.ObjectId,
    buyingPrice : Number,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;