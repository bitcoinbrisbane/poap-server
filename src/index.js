const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const NodeCache = require("node-cache");

// load config from dotenv
require("dotenv").config();

app.use(cors());
app.use(express.json());

// TODO: USE CONFIG TO USE REDIS OR NODECACHE
const cache = new NodeCache({ stdTTL: 30 * 24 * 60 * 60 });

app.get("/ping", (req, res) => {
    res.send("Pong!");
});

app.get("/", (req, res) => {
    const event = req.query.event;

    if (!event) {
        res.status(400).send("No event provided");
    }

    const links = cache.get(event);
    if (!links) {
        res.status(404).send("Event not found");
    }

    // Select a random link
    // const link = links[Math.floor(Math.random() * links.length)];

    // Select first unfetched link
    const link = links.find((link) => link.fetched === 0);

    if (!link) {
        res.status(404).send("No links left");
    }

    // Mark link as fetched at current unix timestamp
    link.fetched = Math.floor(Date.now() / 1000);

    // Update the links array
    links[link.line] = link;

    // Update cache
    cache.set(event, links);

    res.send(link);
});

// Load or reload the CSV into memory
app.post("/", async (req, res) => {
    const file = req.body.file;
    if (!file) {
        res.status(400).send("No file provided");
    }

    const event = req.body.event;
    if (!event) {
        res.status(400).send("No event provided");
    }

    const response = await axios.get(file);
    const txt = response.data;

    const links = txt.split("\n").map(line => {
        return { url: line, fetched: 0 }
    });

    cache.set(event, links);

    res.send(links);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
});
