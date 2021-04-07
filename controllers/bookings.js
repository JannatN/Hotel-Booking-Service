const db = require("../models");
const Booking = db.bookings;


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
const cancelReservation = (req, res) =>  {

    const bookingID = req.params.bookingID;

    Booking.destroy({
        where: { bookingID: bookingID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "The room was canceled successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete room Maybe it was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting room"
            });
        });
}

module.exports = { getAllBookings, bookRoom, cancelReservation }