const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const app = express();
const port = process.env.PORT || 3000;

//dotenv setup
const dotenv = require('dotenv');
dotenv.config();

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});