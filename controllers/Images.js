const { Image, Variant } = require('../models')

//Controller for all of the items in the image
const index = async (req, res) => {
    const images = await Image.findAll()
    res.render('views/images/index', { images })
};
//Controller for the form, this will be done later in the month
const form = async (req, res) => {
    const variants = await Variant.findAll()
    if (req.params.id) {
        const image = await Image.findByPk(req.params.id)
        res.render('views/images/edit', { image, variants })
    } else {
        res.render('views/images/create', { variants })
    }
};
//Controller that finds the item by ID
const show = async (req, res) => {
    const image =  await Image.findByPk(req.params.id)
    const variant = await image.getVariant()
    res.render('views/images/show', { image, variant })
};
//Controller that creates an item inside the image list
const create = async (req, res, next) => {
    const image = await Image.create(req.body)
    req.imageId = image.id
    next()
    res.redirect('/images/'+ image.id)
};
//Controller that updates a certain item in image list by id.
const update = async (req, res, next) => {
    const image = await Image.update(req.body, {
        where: { id: req.params.id }
    })
    req.imageId = req.params.id
    next()
    res.redirect('/images/'+ req.params.id)
};
//Controller that removes items by id from the image list.
const remove = async (req, res) => {
    const images = await Image.destroy({where: { id: req.params.id }})
    res.redirect('/images')
};

//Exporting Controllers
module.exports =  { index, form, show, create, update, remove }