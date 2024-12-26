import express from 'express';
const app = express();
import dotenv from "dotenv";
import users from "./routes/users.js";

// Middleware to parse JSON request bodies

app.use(express.json());

dotenv.config() // config .env.local file

const port = process.env.PORT  || 3000;


// Routes

app.use('/api/users', users);



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})