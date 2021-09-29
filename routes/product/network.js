const express = require('express');
const router = express.Router();

const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.post('/', (req, res) => {
    const { product } = req.body;
    controller.addProduct(product)
        .then(response => {
            succes(req, res, response, 201);
        })
        .catch(err => {
            error(req, res, err, 400, '');
        })
})

router.get('/', (req, res) => {
    controller.listProducts()
        .then(response => {
            succes(req, res, response, 200);
        })
        .catch(err => {
            error(req, res, err, 500, '');
        })
})

module.exports = router;