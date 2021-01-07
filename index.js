const express = require('express')
const bodyParse = require('body-parser')

const userRoutes = require('./routes/userRoute')

const app = express()
const port = 3000

app.use(bodyParse.urlencoded({ extended: false }))

userRoutes(app)

app.get('/', (req, res) => res.send('Pelo express agora!'))

app.listen(port, () => console.log('Api rodando na porta 3000')) 
