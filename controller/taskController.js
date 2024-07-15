const Task = require("../models/taskMode")

const createTask = async (req, res) =>{
    const {title, description, priority} = req.body;
    console.log(req.body)
    await Task.create({title, description, priority})
    return res.status(200).json({
        message: "Done"
    })
}

module.exports = createTask