const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', (req,res) => {
    res.end('Welcome')
})

app.post('/api', (req,res) => {
    const message = req.body.message
    res.end('Message' + message)
})

app.listen(3000, ()=> {
    console.log("server is running....")
})