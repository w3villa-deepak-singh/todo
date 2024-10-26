const express = require("express");
const { createTask } = require('../controllers/tasksController');
const router = express.Router();


// GET
router.post("/create", createTask);

  
module.exports = router;