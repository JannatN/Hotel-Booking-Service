module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('booking', {
        bookingID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
  
        },
        roomID: {
            type: Sequelize.INTEGER
            // references: {
            //     model: 'room',
            //     Key: 'roomID'
            // }
        },
        customerID: {
            type: Sequelize.INTEGER,
  
        },
        checkIN: {
            type: Sequelize.DATE,
  
        },
        checkOut: {
            type: Sequelize.DATE,
  
        },
  
  
  
  
    }, {
        timestamps: false,
    });
    // Bookings.associate = ({ Bookings }) => {
    //     Bookings.hasMany(roomID);
    // };
    return Booking;
  
  };