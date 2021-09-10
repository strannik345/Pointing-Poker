import express from "express";
import cors from 'cors';
import { chatRouter } from "./routes/chat";

const PATH = process.env.PORT || 8000;

const app = express();
app.use(cors());


app.use('/api', chatRouter);


app.listen(PATH, () => console.log(`server started at port ${PATH}`));