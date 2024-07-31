const shortid = require('shortid')
const URL = require("../Models/URl")
const handleGenerateShortURL = async (req, res) => {
    const body = req.body;
    console.log(body)
    // console.log(body.data.url)
    if (!body.url) {

        return res.status(400).json({ error: "Url Is Not There To process " })
    }
    const shortId = shortid();
    await URL.create({
        shortID: shortId,
        redirectUrl: body.url,
        visthistory: []
    })
    return res.status(201).json({ id: shortId })
}

module.exports = {
    handleGenerateShortURL
}