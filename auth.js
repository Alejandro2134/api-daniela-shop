const db = require('./db');

const auth = async idUser => {
    try {
        const rolId = await db.one('SELECT roles_id FROM users WHERE user_id = $1', idUser);
        const rol = await db.one('SELECT rol_name FROM roles WHERE roles_id = $1', rolId.roles_id);
        return rol;
    } catch (err) {
        console.log(err);
        throw new Error('No existe el usuario o no cuenta con rol, agreguele uno si es el caso');
    }
}

module.exports = auth;