const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateArticle(prompt) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 1500,
            temperature: 0.7,
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error(`Błąd OpenAI: ${error.message}`);
    }
}

module.exports = generateArticle;
