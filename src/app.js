const express = require("express");
// import express from "express"; 위에꺼랑 같음 babel이 없을때 저렇게 사용함
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post("/api/test", (req, res) => {
    console.log("Server Is Called By Client");

    const {body:{params:{inputData}}} = req;

    console.log(inputData);
})

app.listen(PORT, () => {
    console.log(`${PORT} server start`);
});