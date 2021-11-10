const { Router } = require('express');

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');
const AuthMiddleware = require('../Middleware/AuthMiddleware');

const router = Router();

router.get('/lista', UserController.pegaUsers)

router.get('/:user', UserController.pegaUser)

router.post('/create-user', UserController.criaUser)

router.put('/user/:id', UserController.atualizaUser)

router.delete('/:user', AuthMiddleware, UserController.deletaUser)

router.get('/user', AuthMiddleware, LoginController.index)


router.post('/login', LoginController.index)


router.get('/users/:userId/habilidades', UserController.pegaHabilidadesUser)
router.post('/users/:userId/userhabilidades', UserController.criaUserHabilidades)
router.delete('/users/:userId/userhabilidades/:id', UserController.apagaUserHabilidades)

module.exports = router;