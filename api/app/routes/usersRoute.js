const { Router } = require('express');

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const AuthMiddleware = require('../Middleware/AuthMiddleware');

const router = Router();

router.get('/lista', UserController.pegaUsers)

router.get('/users/:user', UserController.pegaUser)
router.get('/user/exists/:user', UserController.pegaUser)

router.post('/create-user', UserController.criaUser)

router.put('/user/:user', UserController.atualizaUser)

router.delete('/user/:userId', AuthMiddleware, UserController.deletaUser)

router.get('/user', AuthMiddleware, LoginController.index)


router.post('/login', LoginController.index)


router.get('/users/:userId/habilidades', UserController.pegaHabilidadesUser)

router.post('/user/:userId/habilidade', UserController.criaUserHabilidades)

router.delete('/:idAction', UserController.apagaUserHabilidades)

module.exports = router; 