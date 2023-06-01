const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../Controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//Routes are controlled in = controllers
//user searching is .get
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", loginUser);

module.exports = router;
