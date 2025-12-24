//Importing mongoose
const mongoose = require('mongoose');


// Schema-validation
const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String,
        maxLength : 50
    },
    created_at : {
        type : Date,
        required : true
    }
});

// This creates a collection "chats" inside our texty Database
const Chat = mongoose.model("Chat",chatSchema);

// Exporting this Chat model
module.exports = Chat;
