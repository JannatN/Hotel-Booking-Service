const db = require("../models");
const Booking = db.bookings;
const Rooms = db.rooms;


const getAllBookings = (req, res) => {
    Booking.findAll()
        .then(data => {
            res.send({
                'data': data,
                'message': "list of booked rooms",
                'status': 200
            });

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving booked rooms."
            });
        });


}
const bookRoom = (req, res) => {

    const bookedRoom = {
        bookingID: req.body.bookingID,
        roomID: req.body.roomID,
        customerID: req.body.customerID,
        checkIN: req.body.checkIN,
        checkOut: req.body.checkOut

    };
    Rooms.update({ isAvailable: false }, {
        where: { roomID: req.body.roomID }
    })
    Booking.create(bookedRoom)
        .then(data => {

            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while booking the room."
            });
        });

}
const cancelReservation = (req, res) => {

    const bookingID = req.params.id;
    Booking.destroy({
        where: { bookingID: bookingID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "The booking was canceled successfully."
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
const updateReservation = function (req, res) {
    const bookedroom = req.params.id;

    Booking.update(req.body, {
        where: { bookedroom: bookedroom }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Booking was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Booking with id=${id}. Maybe Booking was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Booking with id=" + id
            });
        });

}
module.exports = { getAllBookings, bookRoom, cancelReservation, updateReservation }