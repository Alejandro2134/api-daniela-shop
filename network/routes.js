const rolRouter = require('../routes/rol/network');
const userRouter = require('../routes/user/network');
const productRouter = require('../routes/product/network');
const saleRouter = require('../routes/sale/network');
const accountingRouter = require('../routes/accounting/network');

const routesApi = (app) => {
    app.use('/rol', rolRouter);
    app.use('/user', userRouter);
    app.use('/product', productRouter);
    app.use('/sale', saleRouter);
    app.use('/accounting', accountingRouter);
}

module.exports = routesApi;