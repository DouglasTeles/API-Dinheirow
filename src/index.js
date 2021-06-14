const express = require('express')
const api = express()
const routes = require('./routes')
api.use(express.json())





require('./app/database')

api.use(routes)


const PORT = 3000
api.listen(PORT, (req, res)=>{
    console.log('API running port:', PORT)
})


