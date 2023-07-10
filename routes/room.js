const express = require('express');
const { addRoom,listRoom } = require('../controllers/room');
const router = express.Router();

router.post('/room',addRoom);
router.get('/room',listRoom);

module.exports = router;