const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/users', UserController.pegaUsers)
router.get('/users/:id', UserController.pegaUser)
router.post('/users', UserController.criaUser)
router.put('/users/:id', UserController.atualizaUser)
router.delete('/users/:id', UserController.deletaUser)

router.post('/user/login', UserController.logaUser)

router.get('/users/:userId/habilidades', UserController.pegaHabilidadesUser)
router.post('/users/:userId/userhabilidades', UserController.criaUserHabilidades)
router.delete('/users/:userId/userhabilidades/:id', UserController.apagaUserHabilidades)

module.exports = router;