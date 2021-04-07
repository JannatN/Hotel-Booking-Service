const Room = require("./room");
const { DataTypes } = require('sequelize');

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
        // isAvailable: {
        //     type: Sequelize.BOOLEAN,
        //     allowNull: false,


        // }
    }, {
        timestamps: false,
    });
  
    // Booking.associate = function (models) {
    //     Booking.hasMany(models.Room, { foreignKey: 'roomID' });
    // };
    return Booking;

};