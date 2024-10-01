const express = require('express')
const router = express.Router()

const { register, login, current, alluser, deleteAll } = require('../controllers/userController')
const validation = require('../middleware/validationHandler')

router.post('/register', register)

router.get('/login', login)

router.get('/current',validation,current)

router.get('/alluser',alluser)

router.get('/deleteAll',deleteAll)

module.exports = router;
