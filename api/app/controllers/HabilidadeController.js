const database = require('../models');

class HabilidadeController {

    //pegar TODAS as habilidades da tabela
    static async pegaHabilidades(req, res){
        try {
        const todasHabilidades = await database.Habilidades.findAll()
        return res.status(200).json(todasHabilidades)
        } catch (error) {
        return res.status(404).json(error.message)
        }
    }

    //pegar UMA habilidade na tabela
    static async pegaHabilidade(req, res){
        const { id } = req.params 
        try {
            const umaHabilidade = await database.Habilidades.findOne(
                {where: 
                    {id: Number(id)}
                }
            )
            return res.status(200).json(umaHabilidade)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //criar novo usuario
    static async criaHabilidade(req, res){
        const novaHabilidade = req.body
        try {
            const novaHabilidadeCriada = await database.Habilidade.create(novaHabilidade)
            return res.status(200).json(novaHabilidadeCriada)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //atualizar um registro
    static async atualizaHabilidade(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Habilidades.update(novasInfos, 
                {
                    where: {id: Number(id)} 
                })
            const habilidadeAtualizada = await database.Habilidades.findOne(
                {where: {id: Number(id)}}
            )
            return res.status(200).json(habilidadeAtualizada)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //deletar um registro
    static async deletaHabilidade(req, res){
        const { id } = req.params
        try {
            await database.Habilidades.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `habilidade_id ${id} deletado`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}

module.exports = HabilidadeController;