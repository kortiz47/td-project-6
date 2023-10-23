//REQUIRE AND IMPORT EXPRESS MODULE
const express = require('express');
const app = express();

//REQUIRE AND IMPORT PROJECT DATA AND PATH MODULE
const { projects } = require('./data.json');
const path = require('path');

//SET OUR VIEW ENGINE AS PUG AND USE STATIC PATH AND SET ROUTE TO PUBLIC FOLDER
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

//=========================================ROUTES==================================

//HOME page
app.get('/', (req, res)=>{
    res.render('index', {projects});
})
//ABOUT page
app.get('/about', (req, res)=>{
    res.render('about');
})

//Dynamic PROJECT pages
app.get('/project', (req, res)=>{
    res.render('project');
})

//==================================================================================
//PORT LISTENER
app.listen(3000, ()=>{
    console.log('App running on PORT 3000!')
})
