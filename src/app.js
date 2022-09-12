import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

//Database definition
db.on("error", console.log.bind(console, 'Connection Error'))
db.once("open", () => {
    console.log('Conected with Db')
})

//Calling Server
const app = express()

//Interpreter JSON
app.use(express.json())

//Calling Routes
routes(app)

export default app