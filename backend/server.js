require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes")
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
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes)

app.use("/uploads",express.static(path.join(__dirname,'uploads')))

const PRORT = process.env.PORT || 5000;
app.listen(PRORT, () => console.log(`Server is running on port ${PRORT}`));