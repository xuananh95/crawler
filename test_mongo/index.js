const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const dbURI =
    "mongodb+srv://test:123@cluster0.r8xvv.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(dbURI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created");
        db.close();
    });
});
