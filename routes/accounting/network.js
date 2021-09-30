const express = require('express');
const router = express.Router();

const auth = require('../../auth');
const { succes, error } = require('../../network/response');
const controller = require('./controller');

router.get('/daily', (req, res) => {
    const { authorization } = req.headers;
    const date = req.body;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                controller.getDaily(date)
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

router.get('/month', (req, res) => {
    const { authorization } = req.headers;
    const date = req.body;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                controller.getMonthly(date)
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

module.exports = router;