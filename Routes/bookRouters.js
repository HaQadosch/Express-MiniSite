const Books = require('../models/bookModels')

const express = require('express')
const bookRouter = express.Router()

const sendBooks = (req, res) => Books.find({}, (_, books) => res.json(books))
const postBook = (req, res) => {
  const book = new Books(req.body) // Thanks to the middleware body-parser
  book.save()
  res.status(201).send(book)
}

// req.book is provided by the middleware fired before the routing.
const getBook = (req, res) => res.json(req.book)
const putBook = (req, res) => {
  req.book.title = req.body.title
  req.book.author = req.body.author
  req.book.save()
  return res.json(req.book)
}
const patchBook = (req, res) => {
  if (req.body._id) {
    delete req.body._id
  }
  for (let p in req.body) {
    req.book[p] = req.body[p]
  }
  req.book.save()
  return res.json(req.book)
}
const deleteBook = (req, res) => req.book.remove(err => err
  ? res.status(500).send(err)
  : res.status(204).send('removed')
)

bookRouter.route('/')
  .get(sendBooks)
  .post(postBook)

bookRouter.use('/:bookId', (req, res, next) => {
  Books.find(req.param.bookId, (err, book) => {
    if (err) {
      res.status(500).send(err)
    } else {
      req.book = book
      next()
    }
  })
})

bookRouter.route('/:bookId')
  .get(getBook)
  .put(putBook)
  .patch(patchBook)
  .delete(deleteBook)

module.exports = bookRouter
