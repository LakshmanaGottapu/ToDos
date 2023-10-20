const express = require("express");
const router = require("./routes/router");
const app = express();
const port = process.env.PORT || 4500;
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5500", // Replace with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include credentials (cookies, HTTP authentication) in the CORS request if needed
    optionsSuccessStatus: 204, // Respond with a 204 No Content status for preflight requests
  };
app.use(cors(corsOptions));
app.use("/",router);

app.listen(port, ()=>console.log(`listening to http://localhost:${port}`))