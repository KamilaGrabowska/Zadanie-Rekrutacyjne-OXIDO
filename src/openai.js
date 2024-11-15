const axios = require('axios');

async function generateArticle(prompt) {
    const apiKey = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/completions';

    try {
        const response = await axios.post(url, {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 1000,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error generating article:', error);
        throw error;
    }
}

module.exports = generateArticle;
