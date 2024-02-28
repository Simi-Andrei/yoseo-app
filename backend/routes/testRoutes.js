import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get(
  "/products.json",
  asyncHandler(async (req, res) => {
    res.json(products);
  })
);

export default router;
