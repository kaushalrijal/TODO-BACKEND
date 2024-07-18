const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title : {
        type : String
    },
    priority : {
        type : Number
    },
    description : {
        type : String
    },
    isComplete : {
        type : Boolean
    },
    author : {
        type : Schema.Types.ObjectId,
        ref: "User"
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task