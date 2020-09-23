const { Router } = require('express');

const router = new Router();
const model = require('../models');

router.get('/', async(req, res) => {
    let usuarios = [];
    await model.usuario
        .findAll({})
        .then(resp => {
            usuarios = resp;
        })
        .catch(err => {
            console.log(err);
        });
    res.json(usuarios);
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    let usuarios = {};
    await model.usuario
        .findOne({ where: { id } })
        .then(resp => {
            usuario = resp;
        })
        .catch(err => {
            console.log(err);
        });
    res.json(usuario);
});

router.post('/', async(req, res) => {
    let usuario = {};
    await model.usuario
        .create(req.body)
        .then(resp => {
            usuario = resp;
        })
        .catch(err => {
            console.log(err);
        });
    res.json(usuario);
});

router.put('/:id', async(req, res) => {
    let mensaje = '';
    const id = req.params.id;
    await model.usuario
        .findOne({ where: { id } })
        .then(usuario => {
            usuario.update(req.body);
            mensaje = 'Registro actualizado';
        })
        .catch(err => {
            mensaje = err;
        });
    res.json(mensaje);
});

router.delete('/:id', async(req, res) => {
    let mensaje = '';
    const id = req.params.id;
    await model.usuario
        .findOne({ where: { id } })
        .then(usuario => {
            usuario.destroy();
            mensaje = 'Registro eliminado';
        })
        .catch(err => {
            mensaje = err;
        });
    res.json(mensaje);
});

module.exports = router;