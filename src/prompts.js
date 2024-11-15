function articlePrompt(articleText) {
    return `Przekształć poniższy tekst w artykuł HTML, 
dodaj odpowiednie tagi HTML, wstaw miejsce na obrazy 
oznaczone jako <img src="image_placeholder.jpg" alt="Opis grafiki"> oraz podpisy pod obrazkami:

    ${articleText}
    `;
}

module.exports = { articlePrompt };
