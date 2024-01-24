const express = require("express");
const app = express();
const axios = require("axios");

app.get("/ping", (req, res) => {
    res.send("Pong!");
});

app.get("/", (req, res) => {
    const event = req.query.event;
    res.send(event);
});

// Load or reload the CSV into memory
app.post("/", async (req, res) => {
    const file = req.body.file;
    if (!file) {
        res.status(400).send("No file provided");
    }

    const response = await axios.get(file);
    const txt = response.data;

    const links = txt.split("\n").map((line) => {
        return { url: line, fetched: 0 }
    });

    res.send(links);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});
