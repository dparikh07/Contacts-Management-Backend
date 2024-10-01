const express=require('express');
const errorHandller = require('./middleware/errorHandller');
const connectDb = require('./config/dbConnection');
const dotenv=require('dotenv').config();

const app=express();
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})

// app.get('/api/contacts',(req,res)=>{
//     res.send("Hey there")
// })
connectDb()
app.use(express.json())
app.use('/api/contacts',require('./routes/contacts'))
app.use('/api/user',require('./routes/user'))
app.use(errorHandller)
