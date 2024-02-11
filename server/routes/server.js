const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

//DOTENV
dotenv.config();

//REST
const app = express();

//middlewares - middleman before executing API
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//PORT
const PORT = process.env.PORT || 8080;

//ROUTES
app.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: "welcome",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`.bgGreen.white);
});
