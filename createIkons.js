
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