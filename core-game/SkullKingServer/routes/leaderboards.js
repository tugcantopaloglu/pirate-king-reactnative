const express = require("express");
const router = express.Router();

// Mock data for leaderboards and achievements
const leaderboards = [
  { player: "Player1", score: 100 },
  { player: "Player2", score: 80 },
  { player: "Player3", score: 60 },
];

const achievements = [
  { player: "Player1", badge: "Master Strategist" },
  { player: "Player2", badge: "Quick Thinker" },
  { player: "Player3", badge: "Risk Taker" },
];

// Route to get leaderboards
router.get("/", (req, res) => {
  console.log("Leaderboards endpoint hit");
  res.json(leaderboards);
});

// Route to get achievements
router.get("/achievements", (req, res) => {
  console.log("Achievements endpoint hit");
  res.json(achievements);
});

module.exports = router;
