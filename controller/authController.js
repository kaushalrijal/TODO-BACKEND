const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, 12)
    })
    res.status(200).json({
        message: "Successful"
    })
}

const login = (req, res) => {
    res.status(200).json({
        message: "labalaba"
    })
}

module.exports = {createUser, login}