const store = require('./store');

const listProducts = () => {
    return new Promise((resolve, reject) => {
        store.listProducts()
            .then(response => resolve(response))
            .catch(err => reject(err.toString()))
    })
}

const addProduct = product => {
    return new Promise((resolve, reject) => {
        if(!product.description || !product.product_name || !product.price) {
            reject('Todos los datos son necesarios');
        } else {
            store.addProduct(product)
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
    listProducts,
    addProduct
}