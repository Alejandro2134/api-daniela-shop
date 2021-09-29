const store = require('./store');

const addRole = newRole => {
    return new Promise((resolve, reject) => {
        if(newRole.rol === '') {
            reject('El rol no puede estar vacio');
            return false;
        } else {
            store.addRole(newRole)
                .catch(err => {
                    reject(err);
                    return false;
                })

            resolve('');
        }
    })
}

module.exports = {
    addRole
}