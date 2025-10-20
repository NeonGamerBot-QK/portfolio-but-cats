const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", { name: "Saahil" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
