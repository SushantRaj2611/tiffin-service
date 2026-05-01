const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// place order
router.post("/place", async (req, res) => {
    try {
        const { name, address, phone, items, total } = req.body;

        const order = new Order({ name, address, phone, items, total });
        await order.save();

        res.json({ message: "Order placed successfully ✅" });
    } catch (err) {
        res.status(500).json({ message: "Error placing order ❌" });
    }
});

module.exports = router;