const db = require('../../db');

const addRole = async newRole => {
    try {
        await db.none('INSERT INTO roles(rol_name) VALUES ($(rol_name))', {
            rol_name: newRole.rol_name
        })
    } catch (err) {
        throw new Error('Error interno');
    }
}

module.exports = {
    addRole
}