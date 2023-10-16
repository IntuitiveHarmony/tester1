const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

const indexRouter = require("./routes/index");
const errorRouter = require("./routes/error");

// Set ejs view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "images", "favicon.ico"));
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/*", errorRouter);

app.listen(PORT, () => {
  console.log(`\n📡 Server is running on port ${PORT} 📡`);
});
