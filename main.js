//+  1.Зробити верстку карток акторів за прикладом з файлу home.jpeg.
// Відображати в них дані з файлу home.js.

//+ 2.При натисканні на соціальну мережу відбувається перехід
// на нову сторінку.

//+ 3.У різних акторів різна кількість соціальних мереж

//+ 4.При натисканні на картку додавати ім'я та прізвище актора до списку, розташованого під картками.

//+ 5.Імена та прізвища не повинні повторюватися в списку обраних.

//+  6.Додати можливість видаляти з списку обраних.



// function createCard(actors) {
//     const cardWrapper = document.createElement('li');
//     cardWrapper.classList.add('card-wrapper');

//     const cardContainer = document.createElement('article');
//     cardContainer.classList.add('card-container');

//     const innerBordDiv = document.createElement('div');
//     innerBordDiv.classList.add('card-innerBorder');

//     const cardPhoto = document.createElement('img');
//     cardPhoto.classList.add('card-photo');
//     cardPhoto.setAttribute('src', actors.profilePicture);
//     cardPhoto.setAttribute('alt', actors.lastName);

//     cardPhoto.onerror = function () {
//         cardPhoto.remove();
//         const textFallback = document.createElement('div');
//         textFallback.classList.add('card-text-fallback');
//         textFallback.innerText = actors.firstName[0] + ' ' + actors.lastName[0];
//         innerBordDiv.appendChild(textFallback);
//     };

//     const cardFullName = document.createElement('h2');
//     cardFullName.classList.add('card-fullname');
//     cardFullName.innerText = actors.firstName + ' ' + actors.lastName;

//     const divIkonsGiper = document.createElement('div');
//     divIkonsGiper.classList.add('divIkons');

//     const socialMediaIcons = [
//         { id: 'imgfFacebook', class: 'facebook-icon', src: 'ikons/facebook-svgrepo-com.svg' },
//         { id: 'imgfTwitter', class: 'imgfTwitter-icon', src: 'ikons/twitter-svgrepo-com.svg' },
//         { id: 'imgInstagram', class: 'imgfInstagram-icon', src: 'ikons/instagram-svgrepo-com.svg' }
//     ];

//     actors.contacts.forEach((contact, index) => {
//         if (socialMediaIcons[index]) {
//             const iconDiv = document.createElement('div');

//             iconDiv.setAttribute('id', socialMediaIcons[index].id);

//             const iconLink = document.createElement('a');
//             iconLink.href = contact;

//             const iconImage = document.createElement('img');
//             iconImage.classList.add(socialMediaIcons[index].class);
//             iconImage.setAttribute('src', socialMediaIcons[index].src);

//             iconLink.appendChild(iconImage);
//             iconDiv.appendChild(iconLink);
//             divIkonsGiper.appendChild(iconDiv);
//         }
//     });

//     innerBordDiv.appendChild(cardPhoto);
//     cardContainer.append(innerBordDiv, cardFullName, divIkonsGiper);
//     cardWrapper.appendChild(cardContainer);

//     return cardWrapper;
// }

// const cardsList = document.getElementById('cards-list');
// const HTMLCards = actors
//     .filter((actors) => actors.firstName && actors.lastName && actors.profilePicture && actors.contacts)
//     .map((actors) => createCard(actors));

// cardsList.append(...HTMLCards);


function createCard(actors) {
    const cardWrapper = document.createElement('li');
    cardWrapper.classList.add('card-wrapper');

    const cardContainer = createArticle(actors);
    const innerBordDiv = createImage(actors);
    const cardFullName = createFullName(actors);
    const divIkonsGiper = createIcons(actors.contacts);

    cardContainer.append(innerBordDiv, cardFullName, divIkonsGiper );
    cardWrapper.appendChild(cardContainer);

    return cardWrapper;
}

function createArticle(actors) {
    const cardContainer = document.createElement('article');
    cardContainer.classList.add('card-container');
    handleCardClick(cardContainer, actors);

   
    return cardContainer;
}
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

function createFullName(actors) {
    const fullName = `${actors.firstName} ${actors.lastName}`;
    let fullNameElement;
    if (fullName.length > 16) {
        fullNameElement = document.createElement('h2');
        fullNameElement.classList.add('card-fullname-for-one-ikons');
        fullNameElement.innerText = fullName;
    } else {
        fullNameElement = document.createElement('h2');
        fullNameElement.classList.add('card-fullname');
        fullNameElement.innerText = fullName;
    }
    return fullNameElement;
}

function createIcons(contacts) {
    const divIkonsGiper = document.createElement('div');
    divIkonsGiper.classList.add('divIkons');

    const socialMediaIcons = [
        { id: 'imgfFacebook', class: 'facebook-icon', src: 'ikons/facebook-svgrepo-com.svg' },
        { id: 'imgfTwitter', class: 'imgfTwitter-icon', src: 'ikons/twitter-svgrepo-com.svg' },
        { id: 'imgInstagram', class: 'imgfInstagram-icon', src: 'ikons/instagram-svgrepo-com.svg' }
    ];

    contacts.forEach((contact, index) => {
        if (socialMediaIcons[index]) {
            const iconDiv = document.createElement('div');
            iconDiv.setAttribute('id', socialMediaIcons[index].id);

            const iconLink = document.createElement('a');
            iconLink.href = contact;

            const iconImage = document.createElement('img');
            iconImage.classList.add(socialMediaIcons[index].class);
            iconImage.setAttribute('src', socialMediaIcons[index].src);

            iconLink.appendChild(iconImage);
            iconDiv.appendChild(iconLink);
            divIkonsGiper.appendChild(iconDiv);
        }
    });

    return divIkonsGiper;
}

const userChoices = [];
function handleCardClick(cardContainer, actors, divIkonsGiper) {
    const pChoosed = document.getElementById('pChoosed');
    const fullName = `${actors.firstName} ${actors.lastName}`;
    const ikonheart = document.createElement('img');
    ikonheart.classList.add('heartIkon');
    ikonheart.setAttribute('src', 'ikons/2438744.svg');
    ikonheart.setAttribute('alt', 'like');
    const spanP = document.createElement('span');
    spanP.classList.add('choiceContainer');
    cardContainer.onclick = function () {
        if (!userChoices.includes(fullName) && !divIkonsGiper) {           
            userChoices.push(fullName);
            if (userChoices.length === 1) {
                pChoosed.innerText = '';
            }
            spanP.innerText = `${fullName} `;
            spanP.appendChild(ikonheart);            
            pChoosed.appendChild(spanP);   
        }
    };
    ikonheart.onclick = function (event) {
        event.stopPropagation(); // зупинити спливання події, щоб не викликати cardContainer.onclick
        const index = userChoices.indexOf(fullName);
        if (index !== -1) {
            userChoices.splice(index, 1);
            pChoosed.removeChild(spanP);
            if (userChoices.length === 0) {
                pChoosed.innerText = 'YOU CHOOSED';
            }
        }
    };
} 


const cardsList = document.getElementById('cards-list');
const HTMLCards = actors
    .filter((actors) => actors.firstName && actors.lastName && actors.profilePicture && actors.contacts)
    .map((actors) => createCard(actors));

cardsList.append(...HTMLCards);




