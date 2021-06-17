const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("rodando")
})

const authenticate = require('./app/middleware/auth/index')
const UserController = require('./app/controllers/UserController')
router.post('/api/users',UserController.store) //cadastro usuario
router.get('/api/profiles/:username',UserController.index) //lista usuario especifico

router.put('/api/user/',authenticate.verifyToken,UserController.update) //atualizar usuario


//login
const sessionController = require('./app/controllers/sessionController')
router.post('/api/users/login',sessionController.create) //Login
router.get('/api/user',authenticate.verifyToken,sessionController.index)//obtem usuário atual

//Articles
const ArticlesController = require('./app/controllers/ArticlesController')
router.post('/api/articles',authenticate.verifyToken,ArticlesController.store) //cadastro Artigo
router.get('/api/articles/:author?',ArticlesController.index)//listar artigos com ou sem parametro

module.exports = router