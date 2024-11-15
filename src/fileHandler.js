const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    return fs.promises.readFile(filePath, 'utf-8');
}

function writeFile(filePath, content) {
    return fs.promises.writeFile(filePath, content, 'utf-8');
}

module.exports = { readFile, writeFile };
