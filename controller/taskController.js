const Task = require("../models/taskMode")

const createTask = async (req, res) =>{
    const {title, description, priority} = req.body;
    console.log(req.body)
    await Task.create({title, description, priority, isComplete : false})
    return res.status(200).json({
        message: "Done"
    })
}

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
}

const deleteTask = async (req, res) => {
    const id = req.body.id;
    await Task.findByIdAndDelete(id);
    res.status(200).json({
        message : "Deleted Succesfully"
    })
}

module.exports = {createTask, getTasks, deleteTask}