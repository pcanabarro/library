import authors from "../models/Author.js";

class authorController {
    static showAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).send(authors)
        })
    }

    static showAuthor = (req, res) => {
        const id = req.params.id
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - ID not found` })
            } else {
                res.status(200).json(authors)
            }
        })
    }

    static addAuthor = (req, res) => {
        let author = new authors(req.body)
        author.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Cannot add an author` })
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Author Updated!" })
            } else {
                res.status(400).send({ message: `${err.message} - Error to update` })
            }
        })
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Author Deleted!" })
            } else {
                res.status(400).send({ message: `${err.message} - Cannot Delete` })
            }
        })
    }
}

export default authorController