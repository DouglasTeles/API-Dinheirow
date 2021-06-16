const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("rodando")
})

const authenticate = require('./app/middleware/auth/index')
const UserController = require('./app/controllers/UserController')
router.post('/api/user',UserController.store) //cadastro usuario
router.get('/api/user',UserController.index) //lista usuarios
router.put('/api/user/:user_id',authenticate.verifyToken,UserController.update) //atualiza usuario

//login
const sessionController = require('./app/controllers/sessionController')
router.post('/api/user/login',sessionController.create) //Login

//Articles
const ArticlesController = require('./app/controllers/ArticlesController')
router.post('/api/articles/:user_id',ArticlesController.store) //cadastro usuario


module.exports = router