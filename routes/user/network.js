const express = require('express');
const router = express.Router();

const auth = require('../../auth');
const controller = require('./controller');

const { succes, error } = require('../../network/response');

router.get('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                controller.listUsers()
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

router.post('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const { user } = req.body;
                controller.addUser(user)
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

router.delete('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const userId = req.body;
                controller.deleteUser(userId)
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

router.put('/', (req, res) => {
    const { authorization } = req.headers;

    auth(authorization)
        .then(response => {
            if(response.rol_name === 'admin') {
                const { userInfo } = req.body;
                controller.updateUser(userInfo)
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