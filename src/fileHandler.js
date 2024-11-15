const fs = require('fs').promises;

async function writeFile(filePath, data) {
    try {
        await fs.writeFile(filePath, data, 'utf-8');
    } catch (error) {
        throw new Error(`Nie udało się zapisać pliku: ${error.message}`);
    }
}

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        throw new Error(`Nie udało się odczytać pliku: ${error.message}`);
    }
}

module.exports = { readFile, writeFile };
