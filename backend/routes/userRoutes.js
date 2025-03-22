// module.exports = router;
const express = require("express");
const User = require("../models/User");
const Investment = require("../models/Investment");

const router = express.Router();

// ✅ Register
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      income,
      rent,
      education,
      healthcare,
      otherExpenses,
      savingsPercentage
    } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({
      name,
      email,
      password,
      income,
      rent,
      education,
      healthcare,
      otherExpenses,
      savingsPercentage
    });

    await user.save();

    req.session.userId = user._id;
    res.json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(400).json({ message: "Invalid email or password" });

    req.session.userId = user._id;
    res.json({ message: "Login successful!", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//overview
router.get("/overview", async (req, res) => {
  try {
    if (!req.session.userId) return res.status(401).json({ message: "Not logged in" });

    // Fetch user data (excluding password)
    const user = await User.findById(req.session.userId).select("-password");

    // Fetch user's investments
    const investments = await Investment.find({ userId: req.session.userId });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, user, investments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ Logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully!" });
  });
});

module.exports = router;
