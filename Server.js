const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const mongoose = require("mongoose")
const Port = 8080;
const app = express();
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
app.use(cors(corsOptions))
const urlroute = require('./Routes/Url')
app.use(express.json())
app.get("/", (req, res) => {
    res.redirect("http://localhost:5173/");
}
)


mongoose.connect(process.env.MOONGO_URL).then(() => {
    console.log("Connected to MongoDB")
})
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use("/api/", urlroute)
app.listen(Port, () => {
    `Server is running on the port ${Port}`
})