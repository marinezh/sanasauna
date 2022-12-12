"use strict";

const path = require("path");

const { key, adapterFile, storageFile } = require("./storageConfig.json");

const { readStorage, writeStorage } = require("./readerWriter");

const storageFilePath = path.join(__dirname, storageFile);

console.log(storageFilePath);

const { adapt } = require(path.join(__dirname, adapterFile));

async function getAllFromStorage() {
  return await readStorage(storageFilePath);
}

getAllFromStorage().then(console.log).catch(console.log);
