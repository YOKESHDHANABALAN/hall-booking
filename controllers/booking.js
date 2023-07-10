const BookingModel = require('../models/booking');

const bookingRoom = async (req, res) => {
    let newDoc = new BookingModel({
        customerName: req.body.customerName,
        date: new Date(req.body.date),
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        roomId: req.body.roomId,
        booking: req.body.booking,
        isActive: req.body.isActive
    });

    let data = await BookingModel.create(newDoc);
    if (data && data.length !== 0) {
        return res.status(200).json({ 'status': true, message: 'Room booking Successfully', data: data });
    } else {
        return res.status(409).json({ 'status': false, 'message': ["Room booking Failed"], data: [] });
    }
}

const bookingListRoom = async (req, res) => {
    let listRoomDetails = await BookingModel.find().populate('roomId');
    return res.status(200).json({ 'status': true, message: 'Room listed Successfully', data: listRoomDetails });
}

module.exports = {
    bookingRoom,
    bookingListRoom
}