const store = require('./store');
const moment = require('moment');

const getDaily = date => {
    return new Promise((resolve, reject) => {
        store.getDaily(date)
            .then(response => {
                let acumulado = 0;
                
                response.map(sale => {
                    acumulado += sale.qty * sale.price;
                })

                resolve(acumulado);
            })
            .catch(err => {
                reject(err.toString());
            })
    })
}

const getMonthly = date => {
    return new Promise((resolve, reject) => {
        let momentDate = moment(date.date);
        let firstDate = momentDate.startOf('month').format('YYYY-MM-DD');
        let lastDate = momentDate.endOf('month').format('YYYY-MM-DD');

        store.getMonthly(firstDate.toString(), lastDate.toString())
            .then(response => {
                let acumulado = 0;
                
                response.map(sale => {
                    acumulado += sale.qty * sale.price;
                })

                resolve(acumulado);
            })
            .catch(err => {
                reject(err.toString());
            })
    })
}

module.exports = {
    getDaily,
    getMonthly
}