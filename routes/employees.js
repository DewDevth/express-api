// routes/Employees.js
const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");

// Create a new Employee
router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  } = req.body;
  //   console.log("body", req.body);
  try {
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      dob,
      gender,
      education,
      company,
      experience,
      package,
    });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Employees
router.get("/", async (req, res) => {
  try {
    const Employees = await Employee.find();
    res.status(200).json(Employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single Employee by ID
router.get("/:id", async (req, res) => {
  try {
    const Employee = await Employee.findById(req.params.id);
    if (!Employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json(Employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Employee by ID
router.put("/:id", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    dob,
    gender,
    education,
    company,
    experience,
    package,
  } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        dob,
        gender,
        education,
        company,
        experience,
        package,
      },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a Employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
