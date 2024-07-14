const Task = require("../models/taskMode")

const createTask = async (req, res) =>{
    const {title, description, priority} = req.body;
    res.send("Created", title, description, priority)
    // await Task.create({})
}

module.exports = createTask