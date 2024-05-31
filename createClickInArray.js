
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