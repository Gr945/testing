const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.Port || 2224
const mongoose = require ('mongoose')

const router = require('./rout')


mongoose.connect('mongodb://localhost:27017/Backend',
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true,
}))

app.use('/',router)


app.listen(PORT, () => {
  console.log(`Server in ${PORT} port`)
})
