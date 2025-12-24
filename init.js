//This file/code is used for initializing the database 
//We initialize the database with some data so our db is never empty and can be used for testing purpose
//We run this file at the starting and no need to run multiple times


const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(()=>{
    console.log("Connection Successful!!!");
}).catch(()=>{
    console.log(error);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/texty');
}

let allChats = [
    {
        from : "Anu",
        to : "Sissy",
        msg : "Sisssyy,How's ur day!",
        created_at : new Date()
    },
    {
        from : "Patttyyy",
        to : "Anu",
        msg : "Helllooo Beautiful!!",
        created_at : new Date()
    },
    {
        from : "Smudge",
        to : "Starcy",
        msg : "How r u mate?!",
        created_at : new Date()
    },
    {
         from : "Josh",
        to : "Alex",
        msg : "Wonderfull yaar",
        created_at : new Date()
    },
];

Chat.insertMany(allChats);