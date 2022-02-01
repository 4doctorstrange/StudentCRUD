const express = require('express')
const connectDB  = require('./db/connectdb.js')
const app = express()
const join= require('path').join
const web = require("./routes/web.js")
const port = process.env.PORT || 3000

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)
app.use(express.urlencoded({extended:false}))

app.set("view engine", "ejs")
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student',web)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})