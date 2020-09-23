const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Inicializando
const app = express();

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./src/routes'));

// Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`${new Date()} : Server escuchando en el puerto: ${app.get('port')}`);
});