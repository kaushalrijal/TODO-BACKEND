const Task = require("../models/taskMode")

const createTask = async (req, res) =>{
    const {title, description, priority} = req.body;
    console.log(req.body)
    const data = await Task.create({title, description, priority, isComplete : false})
    return res.status(200).json({
        message: "Done",
        data
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

const setComplete = async (req, res) => {
    const {id, completed} = req.body;
    // console.log(id, completed)
    await Task.findByIdAndUpdate(id, {
        isComplete : completed
    })
    return res.status(200).json({
        message: "Done"
    })
}

const updateTask = async (req, res) => {
    const {id, title, priority, description, isComplete} = req.body;
    const data = await Task.findByIdAndUpdate(id, {
        title, priority, description
    })
    return res.status(200).json({
        message: "Succesful", data
    })
}

module.exports = {createTask, getTasks, deleteTask, setComplete, updateTask}