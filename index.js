const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const productRouter = require('./routes/products')

app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render('home', {name: "Branden Murphy"} )
})

app.use("/products", productRouter)

app.listen(3000);