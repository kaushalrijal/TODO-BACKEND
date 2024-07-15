const express = require("express");
const {createTask, getTasks, deleteTask} = require("../controller/taskController");

const router = express.Router();

router.post("/create", createTask)

router.get("/", getTasks)

router.post("/delete", deleteTask)

module.exports = router;