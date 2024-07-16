const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const isAuthenticated = (req, res, next) => {
    const {token} = req.cookies
    if(!token || token == null){
        return res.status(400).json({
            success: false,
            message: "Not logged in"
        })
    }

    jwt.verify(token, "meowmeow", async(error, result) => {
        if(err){
            return res.status(400).json({
                success: false,
                message: "Invalid Token"
            })
        }
        const data = await User.findById(result.UserId);
        if(!data){
            return res.status(400).json({
                success: false,
                message: "Invalid UID or Token"
            })
        }
        req.userId = result.userId
        next();
    })
}

module.exports = isAuthenticated