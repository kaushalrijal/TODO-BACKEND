const express = require('express');
const connectToDB = require('./database/connectDatabase');
const testRoutes = require('./routes/testRoutes');
const cors = require("cors")

app = express();

app.use(express.json())
app.use(cors())

connectToDB();

// Test route
app.use('/test', testRoutes)


// Listen
app.listen(5000, ()=>{
    console.log("Server started at", 5000)
})