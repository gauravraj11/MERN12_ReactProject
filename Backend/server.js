const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db.js")
const userRoute = require('./routes/userRoute.js');
const cartRouter = require("./routes/cartRoute.js");
const orderRouter = require("./routes/orderRoute.js");


// It is used to load environment variables from a .env file into process.env in a Node.js application.
const dotenv = require('dotenv')
dotenv.config();

// app config
const server = express();
const PORT = process.env.PORT || 9000;

// middlewares
server.use(express.json())
server.use(cors())

// db connection
connectDB();

// api endpoints
server.use('/api/user', userRoute);
server.use("/api/cart", cartRouter);
server.use("/api/order",orderRouter);



server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})