const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/', (req, res) =>{
    res.sendFile(__dirname, '/styless.css')
})
  

app.listen(PORT, () => {
    console.log('server has been started...')
})