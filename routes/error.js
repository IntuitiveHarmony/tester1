const express = require("express");
const router = express.Router();

const errorEmojis = [
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "💩",
  "😵‍💫",
  "😖",
  "😩",
  "😪",
  "😫",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😬",
  "😲",
  "🤷",
  "😳",
  "😴",
  "😵",
  "😶",
  "🫥",
  "👎",
  "😈",
  "❤️‍🩹",
  "😾",
  "😿",
  "🙀",
  "🙁",
  "🙃",
  "🙄",
  "🤢",
  "🤕",
  "🤖",
  "🤢",
  "🤬",
  "🤯",
  "🤮",
  "🥵",
  "🥶",
  "❌",
  "🤦",
  "💀",
];

// Shuffle function to randomize array order and return the shuffled array
const shuffleArray = (array, times = 1) => {
  const shuffledArray = [...array];

  for (let t = 0; t < times; t++) {
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
  }

  return shuffledArray;
};

const getEmoji = () => {
  return shuffleArray(errorEmojis, 6)[
    Math.floor(Math.random() * errorEmojis.length)
  ];
};

router.get("/", function (req, res) {
  res.status(404).render("404", {
    title: "404 Not Found",
    emoji: getEmoji(),
    message: "Sorry, the page you are looking for does not exist.",
  });
});

module.exports = router;
