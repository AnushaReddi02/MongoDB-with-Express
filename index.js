const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

const Chat = require('./models/chat.js')

app.set("views",path.join(__dirname,"views"));
app.set("view wngine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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
app.get("/",(req,res)=>{
    res.send("Basic set up is Clear...!!!");
});

// Index Route - It is like home page and it shows all the chats
app.get("/chats",async(req,res)=>{
    //We use find() method to get all chats related data from the database
    let chats = await Chat.find();
    //Here we use await keyword coz find() is an async funs and it returns a promise.
    console.log(chats);
    res.render("index.ejs",{chats});

});

//New Route : To create a new chat (new.ejs)
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create Route : Inserts newly created data into database
app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date()
    });

    newChat.save().then((res)=>{
        console.log("Chat was saved!!!");
    }).catch((err)=>{
        console.log(err);
    });
    console.log(newChat);
    res.redirect("/chats");
    //Athough here save() is asynchronous func..we aren't using await because we used then so no need of asyn-await 
})
   
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});