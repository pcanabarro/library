import mongoose from "mongoose";

const bookSchema = new mongoose.Schema( 
    {
        id: { type: String },
        title: { type: String, required: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true }, //refering the collection
        publisher: {type: String},
        pageNumber: { type: Number }
    }
);

const books = mongoose.model('books', bookSchema) //this string creates a collection

export default books

//the mongoose schema makes a skeleton of your data