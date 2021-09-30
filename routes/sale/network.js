const express = require('express');
const router = express.Router();

const auth = require('../../auth');
const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.post('/', async (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            const { sale } = req.body;
            controller.addSale(sale)
                .then(response => {
                    succes(req, res, response, 201);
                })
                .catch(err => {
                    console.log(err);
                    error(req, res, err, 400, '');
                })
        })
        .catch(err => {
            error(req, res, err.toString(), 400, '');
        })
})

router.put('/', (req, res) => {
    const { sale } = req.body;
    controller.updateSale(sale)
        .then(response => {
            succes(req, res, response, 200);
        })
        .catch(err => {
            err(req, res, err, 500, '');
        })
})

router.delete('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const saleId = req.body;
                controller.deleteSale(saleId)
                    .then(response => {
                        succes(req, res, response, 200);
                    }) 
                    .catch(err => {
                        error(req, res, err, 500, '');
                    })
            } else {
                error(req, res, 'El rol que tiene este usuario no puede realizar esta acción', 400, '');
            } 
        })
        .catch(err => {
            error(req, res, err.toString(), 400, '');
        })
})

router.get('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            controller.getSales()
                .then(response => {
                    succes(req, res, response, 200);
                })
                .catch(err => {
                    error(req, res, err, 500, '');
                })
        })
        .catch(err => {
            error(req, res, err.toString(), 400, '');
        })
})

module.exports = router;