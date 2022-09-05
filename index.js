const express = require('express');
const app = express();

//GET /Products/all HTTP/1.1
app.get('/products/all/:pageNumber-:sortInfo-:orderInfo', (request, response) => {
    response.send(`GET Products:  ${request.params.pageNumber}, ${request.params.sortInfo}, ${request.params.orderInfo}`)
});

//GET /Products/8719 HTTP/1.1
app.get('/products/:numberId', (request, response) => {
    response.send(`GET Products: ${request.params.numberId}`)
});

//GET /Products/8719-small-red HTTP/1.1
app.get('/products/:productId-:productSize-:productColor', (request, response) => {
    response.send(`GET Products: ${request.params.productId}, ${request.params.productSize}, ${request.params.productColor}`)
});

app.listen(3000);