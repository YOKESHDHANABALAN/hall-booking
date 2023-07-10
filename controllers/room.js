const RoomModel = require('../models/room');

const addRoom = async(req,res)=>{
    let newDoc = new RoomModel({
        roomName: req.body.roomName,
        noOfSeats: req.body.noOfSeats,
        amenities: req.body.amenities,
        price: req.body.price,
        availability : req.body.availability,
    });

    let data = await RoomModel.create(newDoc);
    if (data && data.length !== 0) {
        return res.status(200).json({ 'status': true, message: 'Room Created Successfully', data: data });
    }else {
        return res.status(409).json({ 'status': false, 'message': ["Room Created Failed" ],data: [] });
    }
}

const listRoom = async(req  ,res)=>{
    let listRoomDetails = await RoomModel.find();
    return res.status(200).json({ 'status': true, message: 'Room listed Successfully', data: listRoomDetails });
}

module.exports = {
addRoom,
listRoom
}