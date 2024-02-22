const express = require('express');
const app = express();
const cors = require('cors')
const env = require('dotenv');
const connectDB = require('./database/connectDB');
const authroute = require('./route/authroute');
const vaildCheck = require('./middleware/vaildCheck');
const adminCheck = require('./middleware/adminCheck');
const adminRoute = require('./route/adminroute');
const userRoute = require('./route/userroute');



app.use(express.json());
env.config();
app.use(cors({ 
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api/auth',authroute)
app.use('/api/admin',vaildCheck,adminCheck,adminRoute);
app.use('/api/user',vaildCheck,userRoute);

const port = process.env.PORT
const server = async()=>{
    try{
       await connectDB()
        app.listen(port,()=>{
            console.log(`${port} is connected`)
        })
    }catch(err){
            console.log(err,'server is not running')
    }
}
server();
