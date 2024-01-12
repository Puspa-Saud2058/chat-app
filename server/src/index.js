const express = require('express')
const app = express()
app.use(express.json());
require('dotenv').config()
const userRoute=require('./routes/users')
const connect=require('./db/connect')
connect();
const port = process.env.PORT
app.use(userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})