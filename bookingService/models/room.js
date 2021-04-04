module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
        roomID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        roomName: {
            type: Sequelize.STRING(10)
        },
        roomType: {
            type: Sequelize.STRING(10)
        },
        description: {
            type: Sequelize.STRING(1000)
        },
        capacity: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
    });

    return Room;
};
