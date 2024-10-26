const mongoose = require("mongoose");


const tasksDataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      default: () => Math.floor(Date.now() / 1000),
    },
    status: {
      type: String,
      enum: ["completed", "pending"], 
      default: "pending",
    },
  },
  { collection: "tasksdata" } 
);

const tasksdata = mongoose.model("tasksdata", tasksDataSchema);

module.exports = tasksdata;
