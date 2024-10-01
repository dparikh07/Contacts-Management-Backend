const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id :{
        type : mongoose.Schema.Types.ObjectId,
        require:true,
        ref : 'User'
    },
    name : {
        type : String,
        require : [true, "Please add the contact name"],
    },
    emailid : {
        type : String,
        require : [true, "please add the contact emailId"],
    },
    phone : {
        type : String,
        require : [true, " please add the Phone number"],
    },
    },{ timestamps: true }
)

module.exports = mongoose.model('contact',contactSchema)