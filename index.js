const express = require('express');
require('./db');
const routesApi = require('./network/routes');

const app = express();

app.use(express.json());

//Rutas api
routesApi(app);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})