const { Router } = require('express');
const HabilidadeController = require('../controllers/HabilidadeController');

const router = Router();

router.get('/habilidades', HabilidadeController.pegaHabilidades)
router.get('/habilidades/:id', HabilidadeController.pegaHabilidade)
router.post('/habilidades', HabilidadeController.criaHabilidade)
router.put('/habilidades/:id', HabilidadeController.atualizaHabilidade)
router.delete('/habilidades/:id', HabilidadeController.deletaHabilidade)

module.exports = router;