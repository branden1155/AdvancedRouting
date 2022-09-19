const { Variant, Product } = require('../models')

//Controller for all of the items in the variants
const index = async (req, res) => {
    const variants = await Variant.findAll()
    res.render('views/variants/index', { variants })
};
//Controller for the form, this will be done later in the month
const form = async (req, res) => {
    const products = await Product.findAll()
    if (req.params.id) {
        const variant = await Variant.findByPk(req.params.id)
        res.render('views/variants/edit', { variant, products })
    } else {
        res.render('views/variants/create', { products })
    }
};
//Controller that finds the item by ID
const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id)
    const product = await variant.getProduct()
    res.render('views/variants/show', { variant, product })
};
//Controller that creates an item inside the variant list
const create = async (req, res) => {
    const variant = await Variant.create(req.body)
    res.redirect('/variants/'+ variant.id)
};
//Controller that updates a certain item in variant list by id.
const update = async (req, res) => {
    const variant = await Variant.update(req.body, {
        where: { id: req.params.id }
    })
    res.redirect('/variants/'+ req.params.id)
};
//Controller that removes items by id from the variant list.
const remove = async (req, res) => {
    const variants = await Variant.destroy({where: { id: req.params.id }})
    res.redirect('/variants')
};

//Exporting Controllers
module.exports =  { index, form, show, create, update, remove }