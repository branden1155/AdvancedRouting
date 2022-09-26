const express = require('express')
const router = express.Router()
const imagesCtrl = require('../controllers/Images')

const { uploadImage } = require('../middlewares')

//Routers
router.get('/', imagesCtrl.index)
router.get('/new', imagesCtrl.form)
router.get('/:id', imagesCtrl.show)
router.get('/:id/edit', imagesCtrl.form)

router.post('/', imagesCtrl.create, uploadImage)
router.post('/', imagesCtrl.update, uploadImage)

router.delete('/:id', imagesCtrl.remove)
router.get('/:id/delete', imagesCtrl.remove)

//Export for Routers
module.exports = router