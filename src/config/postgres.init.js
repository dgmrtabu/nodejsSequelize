const Sequelize = require('sequelize');

const sequilize = new Sequelize('seguirdad_cns', 'postgres', 'Desarrollo2019', {
    host: 'localhost',
    dialect: 'postgres'
});

sequilize.authenticate()
    .then(() => {
        console.log('Conectado');
    })
    .catch(err => {
        console.log('No se conecto');
    });

// Falta la creacion de tabla que ya se hizo

module.exports = sequilize;