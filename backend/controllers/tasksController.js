// model import here
const tasksdata = require("../models/tasksModel");

const createTask = async (req, res) => {
  try {
    const { title, description, startTime, endTime, date, status } = req.body;

    const newTask = new tasksdata({
      title,
      description,
      startTime,
      endTime,
      date: date || Math.floor(Date.now() / 1000),
      status: status || "pending",
    });


    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task created successfully", data: savedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create task: " + error.message });
  }
};

module.exports = { createTask };
