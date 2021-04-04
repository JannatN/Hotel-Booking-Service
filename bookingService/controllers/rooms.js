const db = require("../models");
const Room = db.rooms;
const Op = db.Sequelize.Op;

const getRooms = (req, res) => {
    Room.findAll()
        .then(data => {
            res.send({   // send it as json, not as array of objs
                'data': data,
                'message': "list of rooms",
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
const addRoom = function (req, res) {

    // Validate request
    if (!req.body.roomID || !req.body.name || !req.body.description || !req.body.capacity) {
        res.status(400).send({
            message: "RoomID, Name, Description and capacity can not be empty!"
        });
        return;
    }

    // Create a room
    const room = {
        roomID: req.body.roomID,
        name: req.body.name,
        description: req.body.description,
        capacity: req.body.capacity,
    };

    // Save room in the database
    Room.create(room)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Room."
            });
        });

}

// const searchRoom = function (req, res) {  // (req, res)=>{  
//     const roomID = req.query.roomID ? req.query.roomID : "";
//     const roomName = req.query.name ? req.query.name : "";

//     var condition = {
//         [Op.or]:
//             [
//                 { fname: { [Op.like]: `%${firstName}%` } },
//                 { lname: { [Op.like]: `%${lastName}%` } }
//             ]
//     };
//     Student.findAll({
//         where: condition

//     })
//         .then(data => {
//             res.send({
//                 'data': data,
//                 'message': "Students retrieved successfully",
//                 'status': 200
//             });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving tutorials."
//             });
//         });

// }
module.exports = { getRooms, addRoom }