const express = require('express')
const server = express();
const apiRouter = require('./routers/apiRouter')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

server.use(cors())
server.use(express.json());
server.use(helmet())
server.use(
    session({
        name: 'iphone',
        secret: process.env.COOKIE_SECRET || 'wingardium leviosa',
        cookie: {
            maxAge: 1000 * 60 * 10, // 10 minutes
            secure: process.env.NODE_ENV === 'development' ? false : true,
            httpOnly: true,
        },
        resave: false,
        saveUninitialized: false,
    })
)



server.use('/api', apiRouter)

module.exports = server;