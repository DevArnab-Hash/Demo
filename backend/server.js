// import dependencies/functions
import express, { Router } from 'express';
import dotenv from 'dotenv';
import route from './router/mainroute.js';
import connectDatabase from './database/connectDB.js';

// configuration
const app = express();
dotenv.config();

connectDatabase();    // Database connection

// app router
app.use('/', route);

// app listen server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port http://localhost:5000`);
});
