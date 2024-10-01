const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const validation = asyncHandler(async(req,res,next)=>{
    const tocken = req.headers.authorization
    jwt.verify(tocken.split(' ')[1],process.env.PRIVET_KEY,(err,decoded)=>{
        if(err){
            res.status(400)
            throw new Error("You couldn't verify yourself")
        }
        req.user = decoded.user
        console.log(decoded.user)
        next()
    })
})

module.exports = validation