const { Router } = require('express');
const HabilidadeController = require('../controllers/HabilidadeController');

const router = Router();

router.get('/habilidades', HabilidadeController.pegaHabilidades)

router.get('/habilidade/:habilidade', HabilidadeController.pegaHabilidade)

router.post('/cria-habilidade', HabilidadeController.criaHabilidade)
router.put('/habilidades/:id', HabilidadeController.atualizaHabilidade)

router.delete('/habilidades/:id', HabilidadeController.deletaHabilidade)

module.exports = router;