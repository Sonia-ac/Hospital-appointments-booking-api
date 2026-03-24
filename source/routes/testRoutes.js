import express from "express";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only admin can access
router.get(
  "/admin-dashboard",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin 👑" });
  }
);

// Doctor or admin can access
router.get(
  "/doctor-area",
  protect,
  authorize("doctor", "admin"),
  (req, res) => {
    res.json({ message: "Welcome Doctor 🩺" });
  }
);

export default router;