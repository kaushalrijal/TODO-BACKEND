
const express = require("express")

const { createUser, login, logout } = require("../controller/authController")

router = express.Router()

router.post("/signup", createUser)
router.post("/login", login)
router.get("/logout", logout)

module.exports = router