const express = require("express");
const router = require("./routes/mainRouter");
const morgan = require("morgan");
/* const cors = require("cors"); */

const app = express();

app.use(morgan("dev"));
app.use(express.json());
/* server.use(cors()); */

app.use(router);

module.exports = app;