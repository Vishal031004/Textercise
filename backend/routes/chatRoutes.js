const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, accessChat);         // POST request to access a chat
router.get("/", protect, fetchChats);          // GET request to fetch chats
router.post("/group", protect, createGroupChat);  // POST request to create a group chat
router.put("/rename", protect, renameGroup);       // PUT request to rename a group
router.put("/groupremove", protect, removeFromGroup);  // PUT request to remove a user from a group
router.put("/groupadd", protect, addToGroup);        // PUT request to add a user to a group

module.exports = router;
