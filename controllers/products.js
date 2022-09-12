const Products = require('../models/products')

//Controller for all of the items in the product
const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products })
    //res.json(products)
};
//Controller for the form, this will be done later in the month
const form = (req, res) => {
    //res.send('Product.form')
    if (req.params.id) {
        const product = Products.find(req.params.id)
        res.render('views/products/edit', { product })
    } else {
        res.render('views/products/create')
    }
};
//Controller that finds the item by ID
const show = (req, res) => {
    const product = Products.find(req.params.id)
    //res.json(product)
    res.render('views/products/show', { product })
};
//Controller that creates an item inside the product list
const create = (req, res) => {
    const product = Products.create(req.body)
    res.redirect('/products/'+ product.id)
    //res.json(product)
};
//Controller that updates a certain item in product list by id.
const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.redirect('/products/'+ req.params.id)
    //res.json(product)
};
//Controller that removes items by id from the product list.
const remove = (req, res) => {
    const products = Products.remove(req.params.id)
    res.redirect('/products')
};

//Exporting Controllers
module.exports =  { index, form, show, create, update, remove }