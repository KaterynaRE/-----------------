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