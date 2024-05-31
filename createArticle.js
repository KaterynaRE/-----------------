
function createArticle(actors) {
    const cardContainer = document.createElement('article');
    cardContainer.classList.add('card-container');
    handleCardClick(cardContainer, actors);

   
    return cardContainer;
}

