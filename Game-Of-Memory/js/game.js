
const grid = document.querySelector('.game');

const characters = [
    'char-1',
    'char-2',
    'char-3',
    'char-4',
    'char-5',
    'char-6',
    'char-7',
    'char-8',
    'char-9',
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard ='';
let secondCard ='';

const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter===secondCharacter){

    }else{
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');
    }
}

const revealCard = ({target}) =>{

    if(target.parentNode.className.includes('reveal-card')){
        return;
    };

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    };

    
}

const createCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/characters/${character}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-', character);

    return card;
}

const loadGame = () =>{

    const duplicateCharacters = [...characters, ...characters];

    const shuffledArray = duplicateCharacters.sort(() => Math.random()-0.5);


    duplicateCharacters.forEach((character) => {
        
        const card = createCard(character);
        grid.appendChild(card)
    });
}

loadGame()