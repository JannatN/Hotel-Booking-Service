const Booking = require("./booking");

module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
        roomID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        roomName: {
            type: Sequelize.STRING(10),
            allowNull: false

        },
        roomType: {
            type: Sequelize.STRING(10),
            allowNull: false,

        },
        description: {
            type: Sequelize.STRING(1000),
            allowNull: false,

        },
        capacity: {
            type: Sequelize.INTEGER,
            allowNull: false,

        },
        isAvailable: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    },
        { timestamps: false })


    return Room;
};
