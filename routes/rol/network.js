const express = require('express');
const router = express.Router();

const auth = require('../../auth');
const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.post('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const { rol } = req.body;
                controller.addRole(rol)
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

module.exports = router;