const express = require("express")
const router = express.Router();
const createDB = require("../config/db")


createDB.sync().then(() => {
  console.log("DB is running");
})


router.post("/signup", (req, res) => {
  try {
    const {name, email, password} = req.body;
  } catch (error) {
    console.log(" occured");
  }
})










module.exports = router;

