import books from "../models/Book.js"

//static is for not instantiating
class bookController {
    static showBooks = (req, res) => {
        books.find()
            .populate('author') //reffering to key
            .exec((err, books) => {
                res.status(200).json(books)
            })
    }

    static showBook = (req, res) => {
        const id = req.params.id
        books.findById(id)
            .populate('author') // populate makes the infos appears
            .exec((err, books) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - ID not found` })
                } else {
                    res.status(200).json(books)
                }
            })
    }

    static addBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err} - Error to add` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book Updated!' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book removed!' })
            } else {
                res.status(500).send({ message: `${err.message} - Book not found!` })
            }
        })
    }

    static showPublisherBook = (req, res) => {
        const publisher = req.query.publisher
        books.find({'publisher': publisher}, {}, (err, books) => {
            res.status(200).send(books)
        })
    }
}

export default bookController