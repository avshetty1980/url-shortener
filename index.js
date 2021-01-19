const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")

const app = express()

app.use(helmet())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

// app.get("/:id", (req,res) => {
//     // res.json({
//     //     message: "ash.url - Short Url service"
//     // })
//     //TODO: redirect to short url
// })

// app.post("/url", (req,res) => {
//     //TODO: create short url
// })

// app.get("/url/:id", (req,res) => {
//     // res.json({
//     //     message: "ash.url - Short Url service"
//     // })

//     //TODO: get info about short url by id
// })

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})



