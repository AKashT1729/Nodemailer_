import dotenv from 'dotenv';
import express from 'express';
import router from './routes/router.js';
import cors from 'cors'
dotenv.config();
const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});