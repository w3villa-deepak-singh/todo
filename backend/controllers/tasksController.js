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

const editTask = async (req, res) => {
    try {
      const { id } = req.params; 
      const { title, description, startTime, endTime, date, status } = req.body;
  
      const updatedTask = await tasksdata.findByIdAndUpdate(
        id,
        {
          title,
          description,
          startTime,
          endTime,
          date: date || Math.floor(Date.now() / 1000),
          status: status || "pending",
        },
        { new: true } 
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      res.status(200).json({ message: "Task updated successfully", data: updatedTask });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update task: " + error.message });
    }
  };

const getAllTasks = async (req, res) => {
    try {
      const tasks = await tasksdata.find(); 
      res.status(200).json({ message: "Tasks retrieved successfully", data: tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve tasks: " + error.message });
    }
  };

const getTaskById = async (req, res) => {
    try {
      const { id } = req.params; 
      const task = await tasksdata.findById(id); 
  
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
  
      res.status(200).json({ message: "Task retrieved successfully", data: task });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve task: " + error.message });
    }
  };



module.exports = { createTask ,editTask, getAllTasks, getTaskById};
