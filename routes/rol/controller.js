const store = require('./store');

const addRole = newRole => {
    return new Promise((resolve, reject) => {
        if(!newRole.rol) {
            return reject('El rol no puede estar vacio');
        } else {
            store.addRole(newRole)
                .catch(err => {
                    return reject(err);
                })

            resolve('');
        }
    })
}

module.exports = {
    addRole
}