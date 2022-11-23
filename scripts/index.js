const data = [
    {
        src: './images/firstPhoto.jpg',
        name: 'Первое совместное фото'
    },
    {
        src: './images/goFromWork.jpg',
        name: 'Едем домой с работы'
    },
    {
        src: './images/date.jpg',
        name: 'Чудесное свидание'
    },
    {
        src: './images/lookToThefuture.jpg',
        name: 'Смотрим в светлое будущее на плакате cccр'
    },
    {
        src: './images/onStation.jpg',
        name: 'На остановке'
    },
    {
        src: './images/beach.jpg',
        name: 'Сходили и на пляж'
    },
    {
        src: './images/byAphone.jpg',
        name: 'Купили новый телефон, съели шримп роллы'
    },
    {
        src: './images/sport.jpg',
        name: 'Готовимся к спорту!'
    },
    {
        src: './images/whatchmeplaying.jpg',
        name: 'Смотрит как я играю'
    },
    {
        src: './images/inMoscow.jpg',
        name: 'В Москву!'
    },
    {
        src: './images/Moscow.jpg',
        name: 'В Москве!'
    },
    {
        src: './images/from Moscow.jpg',
        name: 'Из Москвы!'
    },
    {
        src: './images/drink.jpg',
        name: 'Выпиваем? Согреваемся!'
    },
    {
        src: './images/inHome.jpg',
        name: 'У меня'
    },
    {
        src: './images/pumpkinPie.jpg',
        name: 'Готовим пирог!'
    },
    {
        src: './images/next.jpg',
        name: 'Что будет дальше?'
    },
]

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