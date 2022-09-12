import express from "express";
import books from "./bookRoutes.js";
import authors from "./authorRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Node Library" })
    })
    
    //to set every thing that you'll use
    app.use( 
        express.json(),
        books,
        authors
    )
}

export default routes 