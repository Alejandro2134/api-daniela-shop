const store = require('./store');

const addSale = sale => {
    return new Promise((resolve, reject) => {
        if(!sale.product_id || !sale.qty || !sale.sale_at || !sale.users_id) {
            reject('Todos los datos son necesarios');
        } else {
            store.addSale(sale)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    reject(err.toString());
                })
        }
    })
}

const updateSale = sale => {
    return new Promise((resolve, reject) => {
        if(!sale.sales_id) {
            reject('El id de la venta es requerido');
        } else {
            store.updateSale(sale)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err.toString());
                })
        }
    })
}

const deleteSale = saleId => {
    return new Promise((resolve, reject) => {
        if(!saleId.sale_id) {
            reject('No puede estar vacio');
        } else {
            store.deleteSale(saleId)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err.toString());
                })
        }
    })
}

const getSales = () => {
    return new Promise((resolve, reject) => {
        store.getSales()
            .then(data => resolve(data))
            .catch(err => reject(err.toString()))
    })
}

module.exports = {
    addSale,
    updateSale,
    deleteSale,
    getSales
}