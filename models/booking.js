const Room = require("./room");
module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('booking', {
        bookingID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        roomID: {
            type: Sequelize.INTEGER,
            unique: 'roomID',
            allowNull: false,
        },
        customerID: {
            type: Sequelize.INTEGER,
            allowNull: false,


        },
        checkIN: {
            type: Sequelize.DATE,
            allowNull: false,

        },
        checkOut: {
            type: Sequelize.DATE,
            allowNull: false

        },

    }, {
        timestamps: false,
    });


    return Booking;

};