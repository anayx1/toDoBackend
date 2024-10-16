const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/TodoRoutes");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connectedd"))
  .catch((err) => console.log(err));
app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
