const { readFile, writeFile } = require('./fileHandler');
const generateArticle = require('./openai');
const { articlePrompt } = require('./prompts');

async function processArticle() {
    try {
        const articleText = await readFile('./assets/article.txt');
        console.log('Artykuł odczytany:', articleText);

        const prompt = articlePrompt(articleText);
        const generatedHtml = await generateArticle(prompt);
        console.log('Wygenerowany artykuł HTML:', generatedHtml);

        await writeFile('./artykul.html', generatedHtml);
        console.log('Artykuł zapisany do artykul.html');
    } catch (error) {
        console.error('Błąd podczas przetwarzania artykułu:', error);
    }
}

processArticle();
