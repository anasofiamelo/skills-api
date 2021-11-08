const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    if (authHeader == undefined){
        res.send('Proibido')
    } else {
        const token = authHeader.split(' ')[1]
        req.token = token
        next()
        jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, async (err) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: 'Autorizado'
                })
            }
        })
    }

}

