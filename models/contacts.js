const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
     category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    im :{
        type:String,
        required:true
    },
    News:{
        type:String,
        required:true
    },
    readmore:{
        type:String,
        required:true

    }

});
const Contact = module.exports = mongoose.model('Contact',ContactSchema);