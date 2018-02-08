const books = require('../assets/books')

const express = require('express')
const bookRouter = express.Router()

const sendBooks = (req, res) => res.json(books)
const sendBookX = id => (req, res) => res.json(books.books.filter(book => book.id === id))

bookRouter
  .get('/', sendBooks)
  .get('/2', sendBookX(2))

module.exports = bookRouter
