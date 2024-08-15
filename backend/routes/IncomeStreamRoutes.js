const express = require("express");
const {
  createIncomeStream,
  getIncomeStreams,
  getIncomeStreamById,
  updateIncomeStream,
  deleteIncomeStream,
} = require("../controllers/IncomeStreamController");
const { protect } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/", protect, createIncomeStream);
router.get("/", protect, getIncomeStreams);
router.get("/:id", protect, getIncomeStreamById);
router.put("/:id", protect, updateIncomeStream);
router.delete("/:id", protect, deleteIncomeStream);

module.exports = router;
