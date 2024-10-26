const express = require("express");
const { createTask, editTask,getAllTasks,getTaskById } = require('../controllers/tasksController');
const router = express.Router();



router.post("/create", createTask);
router.put("/edit/:id", editTask);
router.get("/tasks", getAllTasks);
router.get("/task/:id", getTaskById);

  
module.exports = router;