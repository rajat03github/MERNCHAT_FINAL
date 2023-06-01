const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessCHAT,
  fetchCHATS,
  createGROUPCHAT,
  renameGROUPCHAT,
  addTOGROUP,
  removeFromGROUP,
} = require("../Controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessCHAT); //create the chat
router.route("/").get(protect, fetchCHATS); //fetch chat
router.route("/group").post(protect, createGROUPCHAT);
router.route("/rename").put(protect, renameGROUPCHAT);
router.route("/groupadd").put(protect, addTOGROUP);
router.route("/groupremove").put(protect, removeFromGROUP);

module.exports = router;
