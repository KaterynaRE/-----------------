function createImage(actors) {
    const innerBordDiv = document.createElement('div');
    innerBordDiv.classList.add('card-innerBorder');

    const cardPhoto = document.createElement('img');
    cardPhoto.classList.add('card-photo');
    cardPhoto.setAttribute('src', actors.profilePicture);
    cardPhoto.setAttribute('alt', actors.lastName);

    cardPhoto.onerror = function () {
        cardPhoto.remove();
        const textFallback = document.createElement('div');
        textFallback.classList.add('card-text-fallback');
        textFallback.innerText = actors.firstName[0] + ' ' + actors.lastName[0];
        innerBordDiv.appendChild(textFallback);
    };
    innerBordDiv.appendChild(cardPhoto);

    return innerBordDiv;
}

