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

Texty/
│
├── models/
│ └── chat.js # Chat schema & model
│
├── views/
│ ├── index.ejs # Displays all chats
│ ├── new.ejs # Create new chat
│ └── edit.ejs # Edit existing chat
│
├── public/
│ └── style.css # Application styling
│
├── index.js # Main Express app
├── package.json
└── README.md

---


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
   git clone <your-repo-link>

## 📂 Project Structure

