import express from 'express';
const app = express();
import dotenv from "dotenv";
import connectDB from './db/index.js';
import users from "./routes/users.js";
import cors from "cors";

// Middleware to parse JSON request bodies

app.use(express.json());

app.use(cors());

connectDB(); // connect to MongoDB

dotenv.config() // config .env.local file

const port = process.env.PORT  || 3000;


// Routes

app.use('/api/users', users);



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})