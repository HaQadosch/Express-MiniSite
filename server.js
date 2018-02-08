const express = require('express')

const app = express()
app.set('view engine', 'pug') // pug pages are expected to be in the folder 'views'

const sendHome = (req, res) => {
  res.render('index') // views/index.pug
}

const port = process.env.port || 5656
app.get('/', sendHome)
app.listen(port, _ => {
  console.log(`Listenning to port ${port}.`)
})
