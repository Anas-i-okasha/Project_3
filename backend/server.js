const express = require('express')
require('dotenv').config()
const app = express()
const db = require('./db')

app.use(express.json())




const port = 5000;
app.listen(port , ()=>{
    console.log(`get your cars http://localhost:${port}`)
})