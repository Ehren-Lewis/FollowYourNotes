const express = require("express");

const PORT = process.env.PORT || 3001;

app = express();

app.use(express.static("public"));

app.listen( PORT, () => {
    console.log(`Open on port ${PORT}`);
})

app.get("/notes", (req, res) => {
    res.sendFile("/public/notes.html");
})