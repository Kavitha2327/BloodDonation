const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Route = require("./routes/MyRouter");
const collegeRoutes = require("./routes/collegeRoutes");
const path = require("path");
const debug = require("debug")("backend:server");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Port configuration
const port = normalizePort(process.env.PORT || "7001");
app.set("port", port);

// Start server
server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

server.on("error", onError);
server.on("listening", onListening);

// WebSocket configuration
const io = new Server(server, {
  cors: {
    // origin: 'http://172.7.182.2:7006',
    //origin: "*",
    origin: ["http://localhost:3001", "http://localhost:7008"],
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["polling", "websocket"],
});

// Listen for client connections
io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);

  // Handle specific events
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

app.set("io", io);
server.on("clientError", (err, socket) => {
  console.error("Client error:", err.message);
  socket.destroy(); // Ensure the socket is properly destroyed
});
// Make `io` globally accessible

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Static file handling
app.use(
  "/blooddonationbackend/Events",
  express.static(path.join(__dirname, "Events"))
);
app.use(
  "/blooddonationbackend/Gallery",
  express.static(path.join(__dirname, "Gallery"))
);

// Routes
app.use("/blooddonationbackend", Route);
app.use("/blooddonationbackend", collegeRoutes);

const dburl = process.env.DBURL;
// MongoDB connection
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Health check endpoint
app.get("/blooddonationbackend", (req, res) => {
  res.send("Welcome to the server!");
});

// Utility functions
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; // named pipe
  if (port >= 0) return port; // port number
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") throw error;

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

module.exports = { app, io };
