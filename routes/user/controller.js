const store = require('./store');

const addUser = newUser => {
    return new Promise((resolve, reject) => {
        if(!newUser.name || !newUser.last_name || !newUser.document) {
            reject('Todos los datos son necesarios');
        } else {
            store.addUser(newUser)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                   reject(err.toString());
                })
        }
    })
}

const listUsers = () => {
    return new Promise((resolve, reject) => {
        store.listUsers()
            .then(data => resolve(data))
            .catch(err => reject(err.toString()))
    })
}

const deleteUser = userDocument => {
    return new Promise((resolve, reject) => {
        if(!userDocument.document) {
            reject('No puede estar vacio');
        } else {
            store.deleteUser(userDocument)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err.toString());
                })
        }
    })
}

const updateUser = userInfo => {
    return new Promise((resolve, reject) => {
        if(!userInfo.document || !userInfo.rol) {
            reject('Todos los datos son necesarios');
        } else {
            store.updateUser(userInfo)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err.toString());
                })            
        }
    })
}

module.exports = {
    addUser,
    listUsers,
    deleteUser,
    updateUser
}