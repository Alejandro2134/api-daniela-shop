const express = require('express');
const router = express.Router();

const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.post('/', (req, res) => {
    const { rol } = req.body;
    controller.addRole(rol)
        .then(response => {
            succes(req, res, response, 201);
        })
        .catch(err => {
            error(req, res, err, 400, '');
        })
})

module.exports = router;