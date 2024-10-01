const express = require("express");
const router=express.Router()
const {getAllContacts,
    getContact,
    addContacts,
    updateContact,
    deleteContact,
    deleteAllContacts} =require('../controllers/contactController');
const validation = require("../middleware/validationHandler");

router.use(validation)

router.route('/').get(getAllContacts).post(addContacts)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)

router.route('/deleteAllContacts').get(deleteAllContacts)

module.exports=router