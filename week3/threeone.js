const express = require("express");
const app = express();
app.use(express.json());

app.post("/health", function (req, res) {
    const kidneys = req.body.kidneys;

    if (!Array.isArray(kidneys)) {
        return res.status(400).send("Invalid input: 'kidneys' should be an array.");
    }

    const kidneylength = kidneys.length;

    res.send("You have " + kidneylength + " kidney(s).");
});

app.listen(3000);
