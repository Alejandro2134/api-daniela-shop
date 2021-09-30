const db = require('../../db');

const getDaily = async date => {
    try {
        let sales = await db.db.any('SELECT qty, product_id FROM sales WHERE sale_at = $1', date.date);
        let salesAndPrice = [];

        await Promise.all(
            sales.map(async sale => {
                const price = await db.db.one('SELECT price FROM products WHERE product_id = $1', sale.product_id);
                salesAndPrice.push({
                    "qty": sale.qty,
                    "price": price.price
                })
            })
        )

        return salesAndPrice;
    } catch (err) {
        throw new Error('Error interno');
    }
}

const getMonthly = async (firstDate, lastDate) => {
    try {
        let sales = await db.db.any('SELECT qty, product_id FROM sales WHERE sale_at BETWEEN $1 AND $2', [firstDate, lastDate]);
        let salesAndPrice = [];

        await Promise.all(
            sales.map(async sale => {
                const price = await db.db.one('SELECT price FROM products WHERE product_id = $1', sale.product_id);
                salesAndPrice.push({
                    "qty": sale.qty,
                    "price": price.price
                })
            })
        )

        return salesAndPrice;
    } catch (err) {
        throw new Error('Error interno');
    }
}

module.exports = {
    getDaily,
    getMonthly
}