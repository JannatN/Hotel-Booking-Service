require('dotenv').config(); // to use enviroment file

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rooms = require("./room.js")(sequelize, Sequelize);
db.bookings = require("./booking.js")(sequelize, Sequelize);

// db.rooms.belongsTo(db.bookings);
db.rooms.hasMany(db.bookings, {
  foreignKey: "roomID",
  as: "roomid",
});

module.exports = db;

