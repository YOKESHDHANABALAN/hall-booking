const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const BookingSchema = new Schema({
    customerName : { type: String },
    date : { type: Date },
    startTime : {type: String},
    endTime : {type: String},
    roomId : { type: ObjectId, ref: 'rooms'},
    booking : { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true
    });
const Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;