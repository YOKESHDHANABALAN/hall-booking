const express = require('express');
const { bookingListRoom, bookingRoom } = require('../controllers/booking');
const router = express.Router();

router.post('/booking',bookingRoom);
router.get('/booking',bookingListRoom);

module.exports = router;