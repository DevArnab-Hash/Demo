// import dependencies/functions
import express, { json } from 'express';
import dotenv from 'dotenv';
import route from './router/mainroute.js';
import connectDatabase from './database/connectDB.js';
import cors from 'cors';

// configuration
const app = express();
dotenv.config();

app.use(cors("*"));
app.use(express.json());

connectDatabase();    // Database connection

// app router
app.use('/', route);


// app listen server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port http://localhost:5000`);
});
