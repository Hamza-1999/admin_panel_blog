const express = require("express");
const app = express();

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Route handler for the API endpoint
app.get("/api/test", (req, res) => {
  // Your API logic here
  res.send("Hello, World!");
});

// Start the server
app.listen(86, "localhost", () => {
  console.log("Server is listening on http://192.168.3.73:86");
});
