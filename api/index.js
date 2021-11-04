const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.use(cors())
    next()
})
routes(app)

app.listen(port, () => console.log(`servidor na porta ${port}`))

module.exports = app