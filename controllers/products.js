const { Product } = require('../models')

//Controller for all of the items in the product
const index = async (req, res) => {
    const products = await Product.findAll()
    res.render('views/products/index', { products })
};
//Controller for the form, this will be done later in the month
const form = async (req, res) => {
    if (req.params.id) {
        const product = await Product.findByPk(req.params.id)
        res.render('views/products/edit', { product })
    } else {
        res.render('views/products/create')
    }
};
//Controller that finds the item by ID
const show = async (req, res) => {
    const product =  await Product.findByPk(req.params.id)
    res.render('views/products/show', { product })
};
//Controller that creates an item inside the product list
const create = async (req, res) => {
    const product = await Product.create(req.body)
    res.redirect('/products/'+ product.id)
};
//Controller that updates a certain item in product list by id.
const update = async (req, res) => {
    const product = await Product.update(req.body, {
        where: { id: req.params.id }
    })
    res.redirect('/products/'+ req.params.id)
};
//Controller that removes items by id from the product list.
const remove = async (req, res) => {
    const products = await Product.destroy({where: { id: req.params.id }})
    res.redirect('/products')
};

//Exporting Controllers
module.exports =  { index, form, show, create, update, remove }