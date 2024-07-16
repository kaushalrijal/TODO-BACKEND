const express = require('express');
const connectToDB = require('./database/connectDatabase');
const cors = require("cors")

const testRoutes = require('./routes/testRoutes');
const taskRoutes = require('./routes/taskRoutes')
const authRoutes = require("./routes/userRoutes")

app = express();

app.use(express.json())
app.use(cors())

connectToDB();

// Test route
app.use('/test', testRoutes)
app.use('/tasks', taskRoutes)
app.use('/user', authRoutes)


// Listen
app.listen(5000, ()=>{
    console.log("Server started at", 5000)
})