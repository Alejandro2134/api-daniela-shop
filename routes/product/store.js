const db = require('../../db');

const listProducts = async () => {
    try {
        const data = await db.any('SELECT * FROM products');
        return data;
    } catch (err) {
        throw new Error('Error interno');
    }
}

const addProduct = async product => {
    try {
        await db.none('INSERT INTO products(description, product_name, price) VALUES ($(description), $(product_name), $(price))', {
            description: product.description,
            product_name: product.product_name,
            price: product.price
        })
    } catch(err) {
        throw new Error('Error interno');
    }
}

module.exports = {
    listProducts,
    addProduct
}