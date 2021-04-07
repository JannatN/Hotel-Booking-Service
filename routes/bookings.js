var express = require('express');
var router = express.Router();



const bookController = require("../controllers/bookings")
router.get('/', bookController.getAllBookings);
router.post('/', bookController.bookRoom);
router.delete('/:id', bookController.cancelReservation);

module.exports = router;