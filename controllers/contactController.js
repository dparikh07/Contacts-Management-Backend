const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')
const error = require('mongoose/lib/error')

// @desc   Get all contacts
// @route  GET /api/contacts 
// @access Public
const getAllContacts = asyncHandler(async(req,res)=>{
    console.log(req.user)
    const contacts= await Contact.find({user_id : req.user.id})
    res.status(200).json(contacts)
})

// @desc   Get contact
// @route  GET /api/contacts/:id 
// @access Public
const getContact = asyncHandler(async (req,res)=>{
    const con = await Contact.find({emailId:req.user.emailId,_id:req.params.id})
    res.json(con)
})

// @desc   post contacts
// @route  POST /api/contacts 
// @access Public
const addContacts = asyncHandler(async (req,res)=>{
    const {name,emailId,phone}=req.body
    if(!name || !emailId || !phone){
        res.status(400)
        throw new Error("Complete all the fields")
    }
    const contacts = await Contact.create({
        user_id:req.user.id,
        name,
        emailId,
        phone
    })
    res.json(contacts)
})

// @desc   update contact
// @route  PUT /api/contacts/:id 
// @access Public
const updateContact = asyncHandler(async (req,res)=>{
    console.log("Hello")
    const con = await Contact.findOneAndUpdate({_id : req.params.id},req.body);
    res.json({message:`Got update request for ${req.params.id}`})
})

// @desc   delete contact
// @route  DELETE /api/contacts/:id 
// @access Public
const deleteContact = asyncHandler(async (req,res)=>{
    const delteAll = await Contact.deleteMany()
    const con = await Contact.findByIdAndDelete(req.params.id)
    res.json({message:`got the delete request for ${req.params.id}`})
})

const deleteAllContacts = asyncHandler(async(req,res)=>{
    // console.log("here")
    const delteAll = await Contact.deleteMany()
    res.json({message:"done"})
    
})

module.exports = {
    getAllContacts,
    getContact,
    addContacts,
    updateContact,
    deleteContact,
    deleteAllContacts
}