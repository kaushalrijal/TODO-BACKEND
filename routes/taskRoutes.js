const express = require("express");
const createTask = require("../controller/taskController");

const router = express.Router();

router.post("/create", createTask)

module.exports = router;