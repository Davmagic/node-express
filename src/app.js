/* 
Create sever using NODE
const http = require('http');
const server = http.createServer((req, res) => { 
    res.end('estoy respondondiendo');
});

const puerto = 3000;

server.listen(puerto, ()=>{
    console.log('escuchando en el puert0 ' + puerto);
}); */

//Create server using Express

const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');

const app = express();

//connecting to DB
mongoose.connect('mongodb://localhost/veterinaria')
    .then(db => console.log('connection succesful'))
    .catch(err => console.log(err))

//Importing routes
const rutas = require('./routes/rutasWeb');
const pets = require('./routes/Mascotas');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({"extended": false}));

//ROUTES
app.use(express.static(path.join(__dirname, "public")));//necesaria para archivos estaticos
app.use('/', rutas);
app.use('/mascotas', pets);
/* pagina de error */
app.use((req, res, next) => {
    res.status(404).render("404");
});

//Starting Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});