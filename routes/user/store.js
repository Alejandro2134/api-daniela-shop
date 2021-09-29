const db = require('../../db');

const addUser = async newUser => {
    try {
        await db.db.none('INSERT INTO users(user_document, last_name, user_name) VALUES ($(document), $(last_name), $(name))', {
            document: newUser.document,
            last_name: newUser.last_name,
            name: newUser.name
        })
    } catch (err) {
        throw new Error('Error interno');
    }
}

const listUsers = async () => {
    try {
        const data = await db.db.any('SELECT * FROM users')
        return data;
    } catch (err) {
        throw new Error('Error interno');
    }
}

const deleteUser = async userDocument => {
    try {
        await db.db.none('DELETE FROM users WHERE user_document = $1', userDocument.document);
    } catch (err) {
        throw new Error('No existe el usuario');
    }
}

const updateUser = async userInfo => {
    try {
        const rolId = await db.db.one('SELECT roles_id FROM roles WHERE rol_name = $1', userInfo.rol);
        await db.db.none('UPDATE users SET roles_id = $1 WHERE user_document = $2', [rolId.roles_id, userInfo.document]);
    } catch (err) {
        throw new Error('El rol no existe o el usuario no existe');
    }
}

module.exports = {
    addUser,
    listUsers,
    deleteUser,
    updateUser
}