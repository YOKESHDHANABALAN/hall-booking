const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const RoomSchema = new Schema({
    roomName : { type: String },
    noOfSeats: { type: String },
    amenities: {
        chair : { type: String },
        table : { type: String },
    },
    price: { type: String },
    availability : { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true
    });
const Rooms = mongoose.model('rooms', RoomSchema);

module.exports = Rooms;