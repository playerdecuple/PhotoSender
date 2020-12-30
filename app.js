var express = require("express");
var fs = require('fs');
var app = express();
var cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({
    limit: "5000mb",
    extended: false
}));

app.use(bodyParser.json({
    limit: "5000mb"
}));

app.listen(7777, () => {
    console.log("Server listening on port 7777");
})

app.post("/image-sender", (req, res, next) => {
    const image_url = req.body.image_url.split(',')[1];
    const fileName = `E:/DB/Image/${req.body.student_info}-${Math.floor(Math.random() * 100000)}.png`
    
    fs.writeFile(fileName, image_url, {encoding: 'base64'}, (err) => {
        console.log(err ? err : "File Downloaded.");
    });

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(image_url);
});
