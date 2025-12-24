const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

const Chat = require('./models/chat.js')

app.set("views",path.join(__dirname,"views"));
app.set("view wngine","ejs");
app.use(express.static(path.join(__dirname,"public")))

const port = 8080;

main()
.then(()=>{
    console.log("Çonnection successful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    // texty is the name of database
    await mongoose.connect('mongodb://127.0.0.1:27017/texty');
}

// Index Route - It is like home page and it shows all the chats
app.get("/chats",async(req,res)=>{
    //We use find() method to get all chats related data from the database
    let chats = await Chat.find();
    //Here we use await keyword coz find() is an async funs and it returns a promise.
    console.log(chats);
    res.render("index.ejs",{chats});

});

app.get("/",(req,res)=>{
    res.send("Basic set up is Clear...!!!");
});

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});