const store = require('./store');

const addRole = newRole => {
    return new Promise((resolve, reject) => {
        if(!newRole.rol_name) {
            reject('El rol no puede estar vacio');
        } else {
            store.addRole(newRole)
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
    addRole
}