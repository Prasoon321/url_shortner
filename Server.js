const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const express = require('express');
const mongoose = require("mongoose")
const Port = process.env.PORT || 8080;
const app = express();
const corsOptions = {
    origin: "https://psurlshortner.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}
app.use(cors(corsOptions))
const urlroute = require('./Routes/Url')
app.use(express.json())
app.get("/", (req, res) => {
    res.redirect("https://psurlshortner.netlify.app/");
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