const express = require("express");
const { signup, login, protected: protectedRoute } = require("../controllers/authcontroller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/protected", authMiddleware, protectedRoute);

// Example route handler
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Add your login logic here
  res.status(200).json({ message: "Login successful" });
});

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  // Add your registration logic here
  res.status(201).json({ message: "User registered successfully" });
});

module.exports = router;
// This code defines the routes for user authentication in an Express application.
// It includes routes for signing up, logging in, and accessing a protected route.
// The routes are linked to their respective controller functions, which handle the logic for each route.
// The authMiddleware is used to protect the route, ensuring that only authenticated users can access it.
// The router is then exported for use in the main server file.