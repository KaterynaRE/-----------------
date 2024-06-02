function createFullName(actors) {
    let fullNameElement = document.createElement('h2');

    if (!actors.firstName || !actors.lastName) {
        fullNameElement.classList.add('card-fullname');
        fullNameElement.innerText = 'unknown';
    } else {
        const fullName = `${actors.firstName} ${actors.lastName}`;
        if (fullName.length > 16) {
            fullNameElement.classList.add('card-fullname-for-one-ikons');
        } else {
            fullNameElement.classList.add('card-fullname');
        }
        fullNameElement.innerText = fullName;
    }

    return fullNameElement;
}

//старий
// const fullName = `${actors.firstName} ${actors.lastName}`;
// let fullNameElement;
// if (fullName.length > 16) {
//     fullNameElement = document.createElement('h2');
//     fullNameElement.classList.add('card-fullname-for-one-ikons');
//     fullNameElement.innerText = fullName;
// } else {
//     fullNameElement = document.createElement('h2');
//     fullNameElement.classList.add('card-fullname');
//     fullNameElement.innerText = fullName;
// }
// return fullNameElement;