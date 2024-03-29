const bodyParser = require("body-parser")
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })    
    app.get('/atendimentos/:id', (req, res) => {
        Atendimento.getId(parseInt(req.params.id), res)
    })
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch(erros => res.status(400).json(erros))

    })
    app.patch('/atendimentos/:id', (req,res) => {
        Atendimento.patch(parseInt(req.params.id), req.body, res)
    })
    app.delete(`/atendimentos/:id`, (req, res) => {
        Atendimento.delete(parseInt(req.params.id), res)
    })
}