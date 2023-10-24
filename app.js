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
app.get('/project/:id', (req, res)=>{
    const { id } = req.params;
    const projectName = projects[id].project_name;
    const description = projects[id].description;
    const technologies = projects[id].technologies;
    const liveLink = projects[id].live_link;
    const githubLink = projects[id].github_link;
    const imagesArray = projects[id].image_urls;

    const templateData = {id, projectName, description, technologies, liveLink, githubLink, imagesArray}
    
    res.render('project', templateData);
})

//=========================================ERRORS=====================================
app.use((req,res,next)=>{
    const err = new Error();
    err.status = 404;
    err.message = `The route you requested does not exist. Please check the URL you requested again.`
    console.log(err.message);
    res.render('page-not-found', {status: err.status, message: err.message})
})

app.use((err, req, res, next)=>{
    err.status = 500;
    err.message = 'Unfortunately, the project you requested does not exist.';
    console.log(err.message);
    res.render('error', {status: err.status, message: err.message})
})

//====================================================================================
//PORT LISTENER
app.listen(3000, ()=>{
    console.log('App running on PORT 3000!')
})
