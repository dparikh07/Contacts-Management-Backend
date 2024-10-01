const constant = require('../constants')

const errorHandller = (err,req,res,next)=>{
    const statusCode = res.statusCode? res.statusCode : 500
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({
                title : "VALIDATION_ERROR",
                message : err.message, 
                stackTrace : err.stack
            })
            break;
        case constant.UNAUTHORIZED_ERROR:
            res.json({
                title : "UNAUTHORIZED_ERROR",
                message : err.message, 
                stackTrace : err.stack
            })
            break;
        case constant.FORBIDDON_ERROR:
            res.json({
                title : 'FORBIDDON_ERROR',
                message : err.message, 
                stackTrace : err.stack
            })
            break;
        case constant.NOTFOUND_ERROR:
            res.json({
                title : "NOTFOUND_ERROR",
                message : err.message, 
                stackTrace : err.stack
            })
            break;
        case constant.SERVER_ERROR:
            res.json({
                title : "SERVER_ERROR",
                message : err.message, 
                stackTrace : err.stack
            })
            break;          
    
        default:
            break;
    }
}

module.exports = errorHandller