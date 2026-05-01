const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    items: Array,
    total: Number
});

module.exports = mongoose.model("Order", OrderSchema);