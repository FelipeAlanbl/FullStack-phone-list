const http = require('http')
const express = require('express')
const cors = require('cors')
const contatosRoute = require('./routes/contato')
const sequelize = require('./database/database')

const app = express()

const hostname = "127.0.0.1"

app.use(cors())

app.use(express.json())

app.use('/api', contatosRoute)

app.use((request, response, next) => {
    response.status(404).send()
})

app.use((request, response, next) => {
    response.status(500).json({ error });
})

sequelize.sync( {alter: true}).then( () => {
    const port = process.env.PORT | 3000

    app.set("port", port);

    const server = http.createServer(app)

    server.listen(port)
})