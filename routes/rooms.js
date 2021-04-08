var express = require('express');
var router = express.Router();

const db = require("../models");
const Room = db.rooms;

const roomsController = require("../controllers/rooms");
router.get('/rooms', roomsController.getAvailableRooms);
router.get('/room/:id', roomsController.getRoomByID);
router.post('/addrooms',roomsController.addRoom);
router.put('/updateRoom/:id',roomsController.updateRoom);
router.delete('/:id',roomsController.deleteRoom);


module.exports = router;