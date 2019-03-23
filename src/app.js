const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express cfg
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static dir to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Myron'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Myron'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpMsg: 'This app will provide weather for any location',
    title: 'Help',
    name: 'Myron'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Wichita',
    forecast: 'Nice'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMsg: 'Help article not found',
    title: '404',
    name: 'Myron'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    errorMsg: 'Page not found',
    title: '404',
    name: 'Myron'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
