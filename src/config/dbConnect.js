import mongoose from "mongoose";

mongoose.connect("mongodb+srv://0x0x0x:0x0x0x@library.oyuse8k.mongodb.net/library") //this string creates a DataBase || when the database is wrong, the array is empty

let db = mongoose.connection

export default db
