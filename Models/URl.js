const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    shortID: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
    visthistory: [{ timestamp: Number }]
}, { timestamp: true })

const URL = mongoose.model("url", Schema)
module.exports = URL
