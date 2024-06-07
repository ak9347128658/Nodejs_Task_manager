const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const taskRouters = require('./routes/taskRoutes');
const userRouters = require("./routes/userRoutes");
const app = express();
const db = require('./configure/db');

const port = process.env.PORT || 3000;

// Enable CORS for all routes and specify origin for frontend
app.use(cors({
    origin: '*' 
}));

app.use(bodyParser.json());

// Setup routes with correct prefix for user routes
app.use(taskRouters);
app.use('/users', userRouters);

const dbConnection = async () =>{
    await db.sync();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

dbConnection();