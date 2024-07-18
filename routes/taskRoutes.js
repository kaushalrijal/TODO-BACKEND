const express = require("express");
const {createTask, getTasks, deleteTask, setComplete, testTasks, updateTask} = require("../controller/taskController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

router.post("/create", isAuthenticated, createTask)
router.get("/", getTasks)
router.get("/get", isAuthenticated, testTasks)
router.post("/delete",isAuthenticated, deleteTask)
router.post("/complete", isAuthenticated, setComplete)
router.post("/update",isAuthenticated, updateTask)

module.exports = router;