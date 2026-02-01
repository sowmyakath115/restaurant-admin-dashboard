require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", require("./routes/menu.routes"));
app.use("/api/orders", require("./routes/order.routes"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
