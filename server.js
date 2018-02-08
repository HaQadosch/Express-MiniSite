const express = require('express')

const port = process.env.port || 5656

const app = express()
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.listen(port, _ => {
  console.log(`Listenning to port ${port}.`)
})
