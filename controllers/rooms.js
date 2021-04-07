const db = require("../models");
const Room = db.rooms;
const bookedRoom = db.bookings;

// const getRooms = (req, res) => {
//     Room.findAll()
//         .then(data => {
//             res.send({   // send it as json, not as array of objs
//                 'data': data,
//                 'message': "list of rooms",
//                 'status': 200
//             });

//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving rooms."
//             });
//         });


// }
const addRoom = function (req, res) {

    // Create a room
    const room = {
        roomID: req.body.roomID,
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.description,
        capacity: req.body.capacity,
    };

    // Save room in the database
    Room.create(room)
        .then(data => {
            res.send({
                'data': data,
                'message': "Rooms retrieved successfully",
                'status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Room."
            });
        });

}

const getAvailableRooms = function (req, res) {  // (req, res)=>{  
    const roomID = req.query.roomID ? req.query.roomID : "";

    //    var condition = {isAvialable: false};

    Room.findAll({
        where: { isAvailable: 0 }

    })
        .then(data => {
            res.send({
                'data': data,
                'message': "Available rooms retrieved successfully",
                'status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving rooms."
            });
        });

}
const getRoomsByID = (req, res) => {

    Rooms.findByPk(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "This is the findByPK"
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Rooms."
            });
        });

}
module.exports = { getAvailableRooms, addRoom, getRoomsByID }