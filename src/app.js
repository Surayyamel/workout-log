const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Configure express to serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Define paths for views and partials
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setting up views/partials with handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Homepage route
app.get('', (req, res) => {
    res.render('index', {
        title: 'My workout log',
        name: 'Surayya',
    })
});

// Legs route
app.get('/quads', (req, res) => {
    res.render('quads', {
        title: 'Quads',
        name: 'Surayya'
    })
})

// Push route
app.get('/push', (req, res) => {
    res.render('push', {
        title: 'Push', 
        name: 'Surayya'
    })
})

// Glutes route
app.get('/glutes', (req, res) => {
    res.render('glutes', {
        title: 'Glutes', 
        name: 'Surayya'
    })
})

// Pull route
app.get('/pull', (req, res) => {
    res.render('pull', {
        title: 'Pull', 
        name: 'Surayya'
    })
})

app.listen(3000, () => {
    console.log('Server up!')
});