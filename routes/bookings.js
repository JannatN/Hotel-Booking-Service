var express = require('express');
var router = express.Router();


const bookController = require("../controllers/bookings")
router.get('/bookings', bookController.getAllBookings);
router.post('/bookings', bookController.bookRoom);
router.delete('/booking/:id', bookController.cancelReservation);


module.exports = router;