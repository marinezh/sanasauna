"use strict";

const path = require("path");

const express = require("express");
const app = express();

const { port, host, storage } = require("./storage/serverConfig.json");
const { CLIENT_RENEG_LIMIT } = require("tls");

const Datastorage = require(path.join(
  __dirname,
  storage.storageFolder,
  storage.dataLayer
));

const dataStorage = new Datastorage();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejsPages")); // connect folder pages with ejs files

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "styles"))); // connect folder public with scc file

console.log(__dirname);

const menuPath = path.join(__dirname, "menu.html"); // connect home page

app.get("/", (req, res) => res.sendFile(menuPath));
// Getting all words list
app.get("/all", (req, res) =>
  dataStorage
    .getAll()
    .then((data) => res.render("allWords", { result: data }))
);

// Getting one word
app.get("/getWord", (req, res) =>
  res.render("getWord", {
    title: "Get",
    header1: "Get",
    action: "/getWord",
  })
);

app.post("/getWord", (req, res) => {
    if (!req.body) return res.sendStatus(500);
  
    const wordName = req.body.name; // becuose in getPerson we have name=id
    dataStorage
      .getOne(wordName)
      .then((word) => res.render("wordPage", { result: word }))
      .catch((error) => sendErrorPage(res, error));
  });

// Adding new word to the database
app.get("/inputform", (req, res) => {
    res.render("form", {
      title: "Add word",
      header1: "Add a new word",
      action: "/input",
      name: { value: "", readonly: "" },
      translation: { value: "", readonly: "" },
      keywords: { value: "", readonly: "" },
      example: { value: "", readonly: "" },
      level: { value: "", readonly: "" },
      links: { value: "", readonly: "" },
    });
  });
  
  app.post("/input", (req, res) => {
    if (!req.body) return res.statusCode(500);
  
    dataStorage
      .insert(req.body)
      .then((status) => sendStatusPage(res, status))
      .catch((error) => sendErrorPage(res, error));
  });


app.listen(port, host, () =>
  console.log(`Server ${host}:${port} listening...`)
);
