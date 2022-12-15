import express from "express";
import { getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/EmployeeController.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployee);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router