const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Use different route definitions
router.get("/", protect, allUsers);  // GET request for all users
router.post("/", registerUser);       // POST request to register a user
router.post("/login", authUser);      // POST request for user login

module.exports = router;
