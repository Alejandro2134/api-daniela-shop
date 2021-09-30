const db = require('../../db');

const addSale = async sale => {
    try {
        await db.db.none('INSERT INTO sales(product_id, qty, sale_at, users_id) VALUES ($(product_id), $(qty), $(sale_at), $(users_id))', {
            product_id: sale.product_id,
            qty: sale.qty,
            sale_at: sale.sale_at,
            users_id: sale.users_id
        })
    } catch (err) {
        console.log(err);
        throw new Error('Error interno');
    }
}

const updateSale = async sale => {
    try {
        if(sale.qty) {
            await db.db.none('UPDATE sales SET qty = $1 WHERE sales_id = $2', [sale.qty, sale.sales_id]);
        }

        if(sale.sale_at) {
            await db.db.none('UPDATE sales SET sale_at = $1 WHERE sales_id = $2', [sale.sale_at, sale.sales_id]);
        }
    } catch (err) {
        throw new Error('Error interno');
    }
}

const deleteSale =  async saleId => {
    try {
        await db.db.none('DELETE FROM sales WHERE sales_id = $1', saleId.sale_id);
    } catch (err) {
        throw new Error('No existe la venta');
    }
}

const getSales = async () => {
    try {
        const data = await db.db.any('SELECT * FROM sales');
        return data;
    } catch (err) {
        throw new Error('Error interno');
    }
}

module.exports = {
    addSale,
    updateSale,
    deleteSale,
    getSales
}