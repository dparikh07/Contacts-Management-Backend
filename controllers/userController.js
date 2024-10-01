const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
var jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const register = asyncHandler (async (req,res)=>{
    const {name,emailId,password} = req.body;
    userEmail = await User.findOne({emailId:emailId})
    if(userEmail!=null){
        res.status(400)
        throw new Error("Email is already used")
    }
    if(!name || !emailId || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const pass = await bcrypt.hash(password,10)
    console.log(pass)
    const newUser = await User.create({
        name,
        emailId,
        password : pass
    })
    res.send(newUser)
})

const login = asyncHandler (async (req,res)=>{
    console.log("here")
    const {name,emailId,password} = req.body
    if(!password || !emailId){
        res.status(400)
        throw new Error("All fields are required")
    }
    const user = await User.findOne({emailId:emailId})
    if(user !=null){
        const validate = await bcrypt.compare(password, user.password)
        if(validate){
            const token=jwt.sign({
                user: {
                    id : user.id,
                    name : name,
                    emailId : emailId
                }
              }, process.env.PRIVET_KEY, { expiresIn: '1h'})
            res.json({"user":`${user}`,"token":`${token}`})
        }else{
            res.status(400)
            throw new Error("Password is incorrect")
        }
    }else{
        res.status(400)
        throw new Error("There is no user with this email address")
    }
})

const current =asyncHandler(async(req,res)=>{
    res.json(req.user)
})

const alluser = asyncHandler(async(req,res)=>{
    const users = await User.find()
    res.json(users)
})

const deleteAll = asyncHandler(async(req,res)=>{
    console.log("Hello")
    const delete_all=await User.deleteMany()
    res.json({message:"Done"})
    console.log(delete_all)
})

module.exports = {register, login, current, alluser, deleteAll}

