const {Router} = require('express')
const Users= require('../models/Users.js')
const getUsers= require('../controllers/getUsers.js')
const getUserById = require('../controllers/getUserById.js')
const postUser = require('../controllers/postUser.js')
const putUser = require('../controllers/putUser.js')
const deleteUser = require('../controllers/deleteUser.js')
const upload = require('../controllers/multer.js')
const uploadImage = require('../controllers/uploadImage.js')

const router = Router()

router.get('/users', getUsers)

router.get('/users/:id',  getUserById)

router.post('/users', postUser); // registrar un usuario

router.post('/users/imageUpload', upload.single('imagen'), uploadImage) // upload an image

router.put('/users/:id', putUser)

router.delete('/users/:id', deleteUser);

module.exports = router