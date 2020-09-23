const Sequelize = require('sequelize');

const sequilize = new Sequelize('seguirdad_cns', 'postgres', 'Desarrollo2019', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequilize = sequilize;
db.usuario = require('../models/usuario')(sequilize, Sequelize);

module.exports = db;