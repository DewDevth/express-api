// models/product.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    gender: String,
    education: String,
    company: String,
    experience: Number,
    package: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
