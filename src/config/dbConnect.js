import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedro:123@library.oyuse8k.mongodb.net/library") //this string creates a DataBase || when the database is wrong, the array is empty

let db = mongoose.connection

export default db