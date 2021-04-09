var express = require('express');
var router = express.Router();


const roomsController = require("../controllers/rooms");
router.get('/rooms', roomsController.getAllRooms);
router.get('/available', roomsController.getAvailableRooms);
router.get('/room/:id', roomsController.getRoomByID);
router.post('/rooms',roomsController.addRoom);
router.put('/room/:id',roomsController.updateRoom);
router.delete('/room/:id',roomsController.deleteRoom);


module.exports = router;