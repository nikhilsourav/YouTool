const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const detailsRoutes = require("./routes/details");

dotenv.config();
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes middleware
app.use("/api", detailsRoutes);

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`===>SERVER RUNNING ON PORT ${port}<===`);
});
