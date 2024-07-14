const express = require("express")

const router = express.Router();

router.get("/", (req, res)=>{
    return res.json({key : "meow"})
})

router.post("/", (req, res)=>{
    console.log(req.body)

    return res.json({chitto : "bhanekai worldlink"})
})

module.exports = router