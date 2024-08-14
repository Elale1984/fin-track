const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/AuthRoutes");
const billRoutes = require("./routes/BillRoutes");
const userRoutes = require("./routes/UserRoutes");
const incomeStreamRoutes = require("./routes/IncomeStreamRoutes");

const app = express();
const port = process.env.PORT || 3000;

//dotenv setup
const dotenv = require("dotenv");
dotenv.config();

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/users", userRoutes);
app.use("/api/income", incomeStreamRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
