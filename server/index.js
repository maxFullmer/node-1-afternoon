const express = require('express');
const getProducts = require('./getProducts.js')
const getProduct = require('./getProduct.js')

const app = express();

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

const port = 4000;
app.listen(port, () => {console.log(`connected to server @ port ${port}`)});