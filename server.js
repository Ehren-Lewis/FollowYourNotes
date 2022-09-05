const express = require("express");
const fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen( PORT, () => {
    console.log(`Open on port ${PORT}`);
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join( __dirname, "/public/notes.html"));
})

app.get("/api/notes", (req, res) => {
    res.sendFile(path.join( __dirname, "/db/db.json"))
})

app.post("/api/notes", (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData.push(req.body));
        // console.log(typeof parsedData);
        // console.log(parsedData)
        fs.writeFile("db/db.json", JSON.stringify(parsedData), (err) => {
            if (err) {
                console.log(err)
            } 
            console.log("success")
        })    
        res.sendFile(path.join( __dirname, "/db/db.json"))
    })

})

app.delete("/api/notes/:id", (req, res) => {
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        const parsedData = JSON.parse(data);
        const deleteData = req.params.id.split(",")
        const delTitle = deleteData[0];
        const delText = deleteData[1];;
        const toSendData = parsedData.filter(el => el.title != delText && el.text != delText);
        fs.writeFile("db/db.json", JSON.stringify(toSendData), (err) => {
            if (err) {
                console.log(err)
            } 
            console.log("success");
        })    
        res.sendFile(path.join( __dirname, "/db/db.json"))
    })
})

