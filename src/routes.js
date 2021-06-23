const express = require('express')
const router = express.Router()


//Users
const authenticate = require('./app/middleware/auth/index')
const UserController = require('./app/controllers/UserController')
router.post('/api/users',UserController.store) //Criar usuário
router.get('/api/profiles/:username',UserController.index) //Obter Perfil
router.put('/api/user/',authenticate.verifyToken,UserController.update) //Atualizar usuario

//Session
const sessionController = require('./app/controllers/sessionController')
router.post('/api/users/login',sessionController.create) //Login
router.get('/api/user',authenticate.verifyToken,sessionController.index)//Obter usuário atual

//Articles
const ArticlesController = require('./app/controllers/ArticlesController')
router.post('/api/articles',authenticate.verifyToken,ArticlesController.store) //Criar Artigo
router.get('/api/articles',ArticlesController.index)//listar artigos com ou sem parametro
router.get('/api/articles/:slug', ArticlesController.indexslug)//Buscar artigo por parametro

//Follows
const FollowsController = require('./app/controllers/FollowController')
router.post('/api/profiles/:username/follow',authenticate.verifyToken,FollowsController.store)//Seguir usuario
router.delete('/api/profiles/:username/follow',authenticate.verifyToken, FollowsController.delete)//Deixar de seguir

//Comments
const CommentController = require('./app/controllers/CommentsController')
router.post('/api/articles/:slug/comments',authenticate.verifyToken,CommentController.store)//Criar comentario
router.get('/api/articles/:slug/comments',CommentController.index)//Listar comentarios em um artigo
router.delete('/api/articles/:slug/comments/:id',authenticate.verifyToken,CommentController.delete)//Deletar comentarios em um artigo
module.exports = router