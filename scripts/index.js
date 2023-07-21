
import { data } from "./data.js";
const cards = document.querySelector('.cards');


function makeCard (data){
    const element = document.querySelector('template').content.querySelector('.cardElement').cloneNode(true);
    
    const elementPhoto = element.querySelector('.cardElement__photo');
    elementPhoto.src = data.src;
    elementPhoto.alt = data.name;

    element.querySelector('.cardElement__decription').textContent = data.name;

    return element;
}

function addCard(card) {
    cards.append(card);
}

function addStartCards (array){
    array.forEach(element => {
        addCard(makeCard(element));
    });
}

addStartCards(data);