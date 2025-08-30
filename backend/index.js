import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';

const app =express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log("error connecting to mongoDb",error);
})

app.use("/bot/v1/",chatbotRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})