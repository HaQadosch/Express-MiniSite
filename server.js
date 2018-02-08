const {chaplin, marilyn} = require('./assets/stars')
const express = require('express')

const app = express()
app.set('view engine', 'pug') // pug pages are expected to be in the folder 'views'

const sendHome = (req, res) => res.render('index') // views/index.pug
const sendChaplin = (req, res) => res.render('chaplin', chaplin)
const sendMarilyn = (req, res) => res.render('marilyn', marilyn)
const sendJean = (req, res) => res.render('jean')
const redirectChaplin = (req, res) => res.redirect('/chaplin')

app.get('/', sendHome)
app.get('/chaplin', sendChaplin)
app.get('/charles', redirectChaplin)
app.get('/marilyn', sendMarilyn)
app.get('/jean', sendJean)

const port = process.env.port || 5656
app.listen(port, _ => {
  console.log(`Listenning to port ${port}.`)
})
