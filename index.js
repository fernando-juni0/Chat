//-------------importes------------
const express = require('express')
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');


//------------Configs--------------
const app = express();

require('dotenv').config()


app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: true,
}))






app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.set('views', './views')
app.set('view engine', 'ejs');



//----------------POST--------------------


//-----------------GET--------------------

app.get('/',(req,res)=>{
    res.render('index')
})

const models = require('./DataBase/models.js')


models.findOne({colecao:"users",where:{displayName:'Fernando Junio1',email:'fernando132sj@gmail.com'}}).then((res)=>{
    console.log(res);
})


//----------------SERVER-------------------

const port = process.env.PORT || 80
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}` );
});
