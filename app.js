const express = require('express');
const connectToDB = require('./database/connectDatabase');
const cors = require("cors")

const testRoutes = require('./routes/testRoutes');
const taskRoutes = require('./routes/taskRoutes')

app = express();

app.use(express.json())
app.use(cors())

connectToDB();

// Test route
app.use('/test', testRoutes)
app.use('/create', taskRoutes)


// Listen
app.listen(5000, ()=>{
    console.log("Server started at", 5000)
})