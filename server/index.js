// server/index.js

const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const notes = require("../client/src/data/notes");
const UserRoutes = require('./routes/UserRoutes');


const PORT = process.env.PORT || 3001;

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running.....");
  });

app.get("/api/notes", (req,res) => {
  res.json(notes);
});

app.use('/api/users',UserRoutes)

app.listen(PORT,console.log(`Server started on PORT ${PORT}`));