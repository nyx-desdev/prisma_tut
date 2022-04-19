const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/user", require("./routes/user"));

app.get("/", (_, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
