const express = require('express'),
      morgan  = require('morgan'),
      createError = require('http-errors');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home');
});

const Port = process.env.PORT;

app.listen(Port, 'localhost', ()=>{
    console.log(`Server is Running at http://localhost:${Port}`);
})