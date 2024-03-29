const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
//require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.URI,
  {
    useNewUrlParser: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
 
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

app.get(`/`, (req, res) => {
    res.send(`The server is working`);
})