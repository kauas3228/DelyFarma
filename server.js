require('dotenv').config();
const session = require('express-session');
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const flash = require('connect-flash');

async function start(){
    await mongoose.connect(process.env.User);
    app.listen(3000, () => {
        console.log('Connected')
    });

}

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.static(path.resolve('public')));
app.use(flash());
app.use(routes);

start();