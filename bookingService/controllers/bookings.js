const db = require("../models");
const Booking = db.bookings;


const getAllBookings = (req, res) => {
    Booking.findAll()
            .then(data => {
                res.send({   // send it as json, not as array of objs
                    'data': data,
                    'message': "list of booking rooms",
                    'status': 200
                });
    
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    
    
    }
const bookRoom = (req, res) => {

    // Validate request
    // if (!req.body.bookingID || !req.body.roomID || !req.body.customerID || !req.body.checkIN || !req.body.checkOut ) {
    //     res.status(400).send({
    //         message: "bookingID , roomID, and customerID can not be empty!"
    //     });
    //     return;
    // }

    // Create a Tutorial
    const bookedRoom = {
        bookingID: req.body.bookingID,
        roomID: req.body.roomID,
        customerID: req.body.customerID,
        checkIN: req.body.checkIN,
        checkOut: req.body.checkOut

    };

    // Save Tutorial in the database
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

module.exports = { getAllBookings, bookRoom }