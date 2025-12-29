const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");

const Chat = require('./models/chat.js');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// const port = 8080;
const PORT = process.env.PORT || 3000;

main()
.then(()=>{
    console.log("Çonnection successful");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    // texty is the name of database
    // await mongoose.connect('mongodb://127.0.0.1:27017/texty');
    await mongoose.connect(process.env.MONGO_URL);
}
app.get("/",(req,res)=>{
    res.redirect("/chats");
    console.log("Basic set up is Clear...!!!");
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
    let {_id,from,to,msg} = req.body;
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

//Edit route : To edit a chat
app.get("/chats/:id/edit", async(req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});

//Update Route : To update the db with edited message
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    // req.params -> used to get values from the URL
    // Here, 'id' comes from the route '/chats/:id'
    // It tells us WHICH chat needs to be updated

    let {msg : newMsg} = req.body; 
    // req.body -> used to get data sent from the form
    // Here, 'msg' is the updated message entered by the user
    // Renaming 'msg' to 'newMsg' for better readability
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {runValidators : true, new : true}   //runValidators : true ->To make sure SchemaValidation is satisfied at the time of updation
        //new : true -> prints the updated msg instead of old one
    )
    console.log(updatedChat);
    res.redirect("/chats");
});

// Destroy Route : Deleting a chat with id(/chats/:id)
app.delete("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});
