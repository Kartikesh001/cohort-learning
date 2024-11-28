const express = require("express");
const app = express();

// Define the root route
app.get("/", function (req, res) {
  // Extract headers and query parameters
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyid = req.query.kidneyid;

  // Check if username and password are valid
  if (!(username === "king" && password === "123456")) {
    res.status(400).json({
      msg: "Invalid credentials",
    });
  } else if (kidneyid == 1 || kidneyid == 2) {
    // Check if kidney ID is valid
    res.json({
      msg: "Your kidney is healthy",
    });
  } else {
    // Handle invalid kidney ID
    res.status(400).json({
      msg: "Invalid kidney ID",
    });
  }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
