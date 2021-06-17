const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("rodando")
})

const authenticate = require('./app/middleware/auth/index')
const UserController = require('./app/controllers/UserController')
router.post('/api/users',UserController.store) //cadastro usuario
router.get('/api/profiles/:username',UserController.index) //lista usuario

router.put('/api/user/:user_id',authenticate.verifyToken,UserController.update) //atualiza usuario


//login
const sessionController = require('./app/controllers/sessionController')
router.post('/api/users/login',sessionController.create) //Login
router.get('/api/user',authenticate.verifyToken,sessionController.index)//obtem usuário atual

//Articles
const ArticlesController = require('./app/controllers/ArticlesController')
router.post('/api/articles',ArticlesController.store) //cadastro usuario


module.exports = router