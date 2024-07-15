const express = require("express");
const createTask = require("../controller/taskController");

const router = express.Router();

router.post("/", createTask)

module.exports = router;