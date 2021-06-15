const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("rodando")
})

const authenticate = require('./app/middleware/auth/index')
const UserController = require('./app/controllers/UserController')
router.post('/api/user',UserController.store) //cadastro usuario
router.get('/api/user',UserController.index) //lista usuarios
router.put('/api/user/:user_id', UserController.update) //atualiza usuario

//login
const sessionController = require('./app/controllers/sessionController')
router.post('/api/user/login',sessionController.create) //Login






module.exports = router