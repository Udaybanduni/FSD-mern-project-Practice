const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);
// Server 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});