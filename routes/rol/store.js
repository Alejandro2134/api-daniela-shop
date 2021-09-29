const db = require('../../db');

const addRole = async newRole => {
    try {
        await db.db.none('INSERT INTO roles(rol_name) VALUES ($(rol_name))', {
            rol_name: newRole.rol_name
        })
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    addRole
}