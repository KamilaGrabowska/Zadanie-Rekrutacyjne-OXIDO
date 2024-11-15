const articlePrompt = (articleText) => {
    return `
    Proszę o obróbkę poniższego artykułu:

    Treść artykułu:
    ${articleText}

    Twoje zadanie:
    1. Użyj odpowiednich tagów HTML do strukturyzacji treści.
    2. W miejscach, gdzie mogą być grafiki, użyj tagu <img> z atrybutem src="image_placeholder.jpg" 
    oraz odpowiednim alt, 
    który wyjaśnia, jaką grafikę należy umieścić. 
    3. Użyj tagu <figcaption> pod obrazkami do dodania podpisów.
    4. Nie dodawaj kodu CSS ani JavaScript, tylko treść artykułu w HTML.
    `;
};

module.exports = { articlePrompt };
