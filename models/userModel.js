const mongoose = require('mongoose')
console.log("Hello")
const schema = new mongoose.Schema({
    name :{
        type : String,
        require : true
    },
    emailId:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true,
        validate : [(val)=>{
            if(val.length < 8){
                return false
            }
        },"Password doesn't went through validation"]
    }
});

module.exports = mongoose.model('User', schema);