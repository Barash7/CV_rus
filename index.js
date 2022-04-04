const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/css', (req, res) =>{
    res.sendFile(path.join(__dirname, 'assets/css/styless.css'));
});

app.use(express.static(__dirname + 'assets/css'));
  

app.listen(PORT, () => {
    console.log('server has been started...')
})