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

const cardsList = document.getElementById('cards-list');
const HTMLCards = actors.map((actor) => createCard(actor));

cardsList.append(...HTMLCards);














//старий
//const cardsList = document.getElementById('cards-list');
// const HTMLCards = actors
//     .filter((actors) => actors.firstName && actors.lastName && actors.profilePicture && actors.contacts)
//     .map((actors) => createCard(actors));

// cardsList.append(...HTMLCards);




