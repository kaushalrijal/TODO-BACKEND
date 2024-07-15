const express = require("express");
const {createTask, getTasks, deleteTask, setComplete, updateTask} = require("../controller/taskController");

const router = express.Router();

router.post("/create", createTask)
router.get("/", getTasks)
router.post("/delete", deleteTask)
router.post("/complete", setComplete)
router.post("/update", updateTask)

module.exports = router;