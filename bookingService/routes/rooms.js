var express = require('express');
var router = express.Router();

const db = require("../models");
const Room = db.rooms;

const roomsController = require("../controllers/rooms");
router.get('/rooms', roomsController.getRooms);
router.post('/rooms',roomsController.addRoom);


module.exports = router;