const express = require('express')
const loginroutes = require('./Routes/login.js')
 

const app = express()

app.use(express.urlencoded({ extended: false }));

app.use('/',loginroutes);
 


app.listen(3000)

 