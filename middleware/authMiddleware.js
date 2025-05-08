const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
// This code defines an authentication middleware for an Express application.
// It checks for a JWT token in the request headers, verifies it, and attaches the decoded user information to the request object.
// If the token is missing or invalid, it sends a 401 Unauthorized response.
// The middleware is exported for use in other parts of the application, such as protecting routes that require authentication.