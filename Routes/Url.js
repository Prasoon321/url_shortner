const express = require('express')
const { handleGenerateShortURL } = require("../Controllers/url")
const URL = require("../Models/URl")
const router = express.Router();

router.post("/shortid", handleGenerateShortURL)
router.get("/:shortid", async (req, res) => {
    const shortID = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortID: shortID
    }, {
        $push: {
            visthistory: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.redirectUrl)
})

module.exports = router