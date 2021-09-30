const express = require('express');
const router = express.Router();

const auth = require('./../../auth');

const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.post('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const { product } = req.body;
                controller.addProduct(product)
                    .then(response => {
                        succes(req, res, response, 201);
                    })
                    .catch(err => {
                        error(req, res, err, 400, '');
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
            controller.listProducts()
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