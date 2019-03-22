const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  res.send([{ name: 'Myron' }, { age: 32 }])
})

app.get('/about', (req, res) => {
  res.send('<h2>About Page</h2>')
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Wichita',
    forecast: 'Nice'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
