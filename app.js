const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
require('dotenv').config();
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expresslayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs'); 

const routes = require('./server/routes/reciperoutes.js');
const insdata = require('./server/controllers/recipecontroller.js')
app.use('/', routes);

app.listen(8080, ()=> console.log("server started at port number 8080")); 