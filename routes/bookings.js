var express = require('express');
var router = express.Router();



const bookController = require("../controllers/bookings")
router.get('/bookedRooms', bookController.getAllBookings);
router.post('/bookRoom', bookController.bookRoom);
router.put('/updateReservation/:id', bookController.updateReservation);
router.delete('/:id', bookController.cancelReservation);


module.exports = router;