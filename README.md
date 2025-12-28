# 💬 Texty 😎  
*A simple WhatsApp-like chat application built with Express & MongoDB*

---

## 🌟 Overview

**Texty** is a basic real-time inspired chat application that allows users to  
**create, view, edit, and delete chat messages**.  
This project is built to understand **CRUD operations**, **RESTful routing**, and  
how **Express, MongoDB, and EJS** work together in a full-stack web application.

---

## 🚀 Features

- 📝 Create new chat messages  
- 👀 View all chats  
- ✏️ Edit existing messages  
- 🗑️ Delete chats  
- 🔁 RESTful routing (GET, POST, PUT, DELETE)
- 🎨 Simple & clean UI using CSS  
- 🛠️ Server-side rendering using EJS  

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, EJS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (with Mongoose)  
- **Utilities**:
  - method-override (for PUT & DELETE)
  - body-parser / express built-in parsers  

---

## 📂 Project Structure

Texty/
│
├── models/
│   └── chat.js          # Chat schema & Mongoose model
│
├── views/
│   ├── index.ejs        # Displays all chats
│   ├── new.ejs          # Create new chat
│   └── edit.ejs         # Edit existing chat
│
├── public/
│   └── style.css        # Application styling
│
├── index.js             # Main Express application
├── package.json         # Project dependencies & scripts
└── README.md            # Project documentation


---


## 🔄 CRUD Routes Explained

| Action | HTTP Method | Route |
|------|-------------|------|
| View all chats | GET | `/chats` |
| New chat form | GET | `/chats/new` |
| Create chat | POST | `/chats` |
| Edit chat form | GET | `/chats/:id/edit` |
| Update chat | PUT | `/chats/:id` |
| Delete chat | DELETE | `/chats/:id` |

---

## 🧠 Key Concepts Learned

- Difference between `req.params` and `req.body`
- RESTful routing conventions
- Using **method-override** to support PUT & DELETE
- Mongoose schema validations
- Server-side rendering with EJS
- Express middleware usage
- MongoDB ObjectIds

---

## ▶️ How to Run the Project

1. Clone the repository
   ```bash
   git clone <your-repo-link> https://github.com/AnushaReddi02/MongoDB-with-Express.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start MongoDB (make sure MongoDB is running)
4. Run the server
   ```bash
   nodemon index.js
   ```
5. Open in browser
   ```bash
   [nodemon index.js](http://localhost:3000/chats
   ```
---

## 🎯 Purpose of This Project
 This project was built as a learning exercise to:
- Strengthen backend fundamentals 
- Understand Express + MongoDB integration  
- Practice clean routing & MVC-like structure 
- Prepare for full-stack development & interviews

---
## 📌 Future Enhancements

- 👤 User authentication
- 💬 Real-time messaging
- 🕒 Timestamps for messages
- 🌙 Dark mode UI
- 🔔 Message notifications

---

## 🙌 Acknowledgements
Built with ❤️ while learning backend development using ***Node.js, Express & MongoDB***.

---

## 👩‍💻 Author

 ***Reddi Anusha***
 CSE Student | Aspiring Full-Stack & Cloud Developer
 
