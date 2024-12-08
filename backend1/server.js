const express = require("express");

const app = express();

const port = 5050;

app.get("/", (req, res) => {
  res.send("Hello World! This is my first Express app.");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at 123-456-7890");
});

app.listen(port, () => {
  console.log(`hamro app listening on port ${port}`);
});
