// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use("/api/users", require("./routes/userRoutes"))F;

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();
const app = express();


// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8081"], // Allow multiple origins
  credentials: true
}));

// ✅ Session Middleware (Put Before Routes)
app.use(
  session({
    secret: "simple_secret", 
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ✅ Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

