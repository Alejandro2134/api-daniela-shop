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

db.connect()
    .then(() => {
        console.log('db conectada');

        const initializeDb = async () => {
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
        
            try {
                await db.none('INSERT INTO roles(roles_id, rol_name) VALUES ($(id), $(name))', {
                    id: '29f1cbcb-fd0b-470a-823b-e1c237c7bdae',
                    name: 'admin'
                })
        
                await db.none('INSERT INTO users(user_document, last_name, user_name, roles_id, user_id) VALUES ($(document), $(last_name), $(user_name), $(roles_id), $(user_id))', {
                    document: '1245668954',
                    last_name: 'Zapata',
                    user_name: 'Alejandro',
                    roles_id: '29f1cbcb-fd0b-470a-823b-e1c237c7bdae',
                    user_id: 'ea8b8d1b-651b-425d-8730-a01b34a6c9e2'
                })
            } catch (err) {
                console.log('Rol y usuario admin ya creados');
            }
        }

        initializeDb();
    })
    .catch(err => {
        console.error(err);
    })

module.exports = db;