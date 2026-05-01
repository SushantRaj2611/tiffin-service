const express = require("express");
const router = express.Router();
const User = require("../models/user");

// signup
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message: "User registered ✅" });
    } catch (err) {
        res.status(500).json({ message: "Error" });
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials ❌" });
        }

        res.json({ message: "Login success ✅", user });
    } catch (err) {
        res.status(500).json({ message: "Error" });
    }
});

module.exports = router;