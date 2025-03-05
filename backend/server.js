require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(
  cors({
    origin: process.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDb();

app.use("/api/v1/auth",authRoutes);

const PRORT = process.env.PORT || 5000;
app.listen(PRORT, () => console.log(`Server is running on port ${PRORT}`));