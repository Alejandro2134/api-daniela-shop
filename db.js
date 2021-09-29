const promise = require('bluebird');
const products = require('./products.json');

const initOptions = {
    promiseLib: promise
}

const pgp = require('pg-promise')(initOptions);

const connectionDetails = {
    host: 'localhost',
    port: 5432,
    database: 'shop',
    user: 'postgres',
    password: '123456'
};

const db = pgp(connectionDetails);

const initializeDb = () => {
    products.map(async product => {
        try {
            await db.none('INSERT INTO products(product_id, product_name, description, price) VALUES ($(id), $(name), $(description), $(price))', {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price
            });
        } catch (err) {
            console.log('Ya se inicializo la base de datos con los productos iniciales');
        }
    });
}

module.exports = {
    db,
    initializeDb
};