const express = require('express');
const router = express.Router();

const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.get('/', (req, res) => {
    controller.listUsers()
        .then(response => {
            succes(req, res, response, 200);
        })
        .catch(err => {
            error(req, res, err, 500, '');
        })
})

router.post('/', (req, res) => {
    const { user } = req.body;
    controller.addUser(user)
        .then(response => {
            succes(req, res, response, 201);
        })
        .catch(err => {
            error(req, res, err, 400, '');
        })
})

router.delete('/', (req, res) => {
    const userDocument = req.body;
    controller.deleteUser(userDocument)
        .then(response => {
            succes(req, res, response, 200);
        }) 
        .catch(err => {
            error(req, res, err, 500, '');
        })
})

router.put('/', (req, res) => {
    const { userInfo } = req.body;
    controller.updateUser(userInfo)
        .then(response => {
            succes(req, res, response, 200);
        })
        .catch(err => {
            error(req, res, err, 500, '');
        })
})

module.exports = router;