const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/userModel")

const createUser = async (req, res) => {
    const {username, email, password} = req.body;
    const data = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, 12)
    })
    return res.status(201).json({
        message: "Successful"
    })
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const data = await User.findOne({
        email
    })
    if(!data){
        return res.status(401).json({
            message : "Credentials don't match.",
            success: false
        })
    }
    const match = bcrypt.compareSync(password, data.password);
    if(!match){
        return res.status(401).json({
            message : "Wrong Password",
            success: false
        })
    }
    const token = jwt.sign({userId: data._id}, "meowmeow", {expiresIn : '30d'})
    res.cookie("token", token, {httponly:true})
    return res.status(200).json({
        message: "Login Successful",
        success: true
    })
}

const logout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({
        message: "Logout Succesful"
    })
}

module.exports = {createUser, login, logout}