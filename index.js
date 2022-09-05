const express = require('express');
const app = express();

//GET /Products/all HTTP/1.1
app.get('/products/all/:page-:sort-:order', (request, response) => {
    response.send(`GET Products:  ${request.params.page}, ${request.params.sort}, ${request.params.order}`)
});

//GET /Products/8719 HTTP/1.1
app.get('/products/:Id', (request, response) => {
    response.send(`GET Products: ${request.params.Id}`)
});

//GET /Products/8719-small-red HTTP/1.1
app.get('/products/:numberId-:size-:color', (request, response) => {
    response.send(`GET Products: ${request.params.numberId}, ${request.params.size}, ${request.params.color}`)
});

app.listen(3000);