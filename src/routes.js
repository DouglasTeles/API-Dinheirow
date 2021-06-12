const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("rodando")
})

const UserController = require('./app/controllers/UserController')
router.post('/api/user',UserController.store)
router.get('/api/user',UserController.index)
router.put('/api/user/:user_id', UserController.update)








module.exports = router