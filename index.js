const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

const Chat = require('./models/chat.js')

app.set("views",path.join(__dirname,"viewas"));
app.set("view wngine","ejs");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/texty')
}

let chat1 = new Chat ({
    from : "Anu",
    to : "Sissy",
    msg : "Sisssyy,How's ur day!",
    created_at : new Date()
});

chat1.save()
  .then((res)=>{
    console.log(res);
});

app.get("/",(req,res)=>{
    res.send("Basic set up is Clear...!!!");
});

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});