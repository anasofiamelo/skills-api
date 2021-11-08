const bodyParser = require('body-parser');
const users = require('./usersRoute');
const habilidades = require('./habilidadesRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
    app.use(habilidades)
}