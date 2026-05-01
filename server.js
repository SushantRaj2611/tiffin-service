const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/order", require("./routes/order"));
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});
let deliveryLocation = { lat: 0, lng: 0 };

// Delivery boy location update
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("updateLocation", (data) => {
    deliveryLocation = data;
    io.emit("locationUpdate", deliveryLocation);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/tiffinDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
    res.send("Server chal raha hai 🔥");
});

// start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});