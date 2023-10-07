import express from "express";
import { getAllRole, createRole } from "../Controller/roleController.js";

const router = express.Router();

router.post("/add-role", createRole);
router.get("/get-role", getAllRole);

export default router;
