const db = require("../models");
const Room = db.rooms;

const addRoom = (req, res) => {

    // Create a room
    const room = {
        roomID: req.body.roomID,
        roomName: req.body.roomName,
        roomType: req.body.roomType,
        description: req.body.description,
        capacity: req.body.capacity,
        isAvailable: req.body.isAvailable
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

const getAvailableRooms = (req, res) => {

    Room.findAll({
        where: { isAvailable: true }

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
const getRoomByID = (req, res) => {

    Room.findByPk(req.params.id)
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
const deleteRoom = (req, res) => {

    const roomid = req.params.id;
    Room.destroy({
        where: { roomid: roomid }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "The room was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete room, Maybe it was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting room"
            });
        });
}
const updateRoom = (req, res) => {
    const roomid = req.params.id;

    Room.update(req.body, {
        where: { roomid: roomid }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Room was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update room with id=${id}. Maybe room was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating room with id=" + id
            });
        });
}

module.exports = { getAvailableRooms, addRoom, getRoomByID, deleteRoom, updateRoom }