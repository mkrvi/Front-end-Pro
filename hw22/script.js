const container = document.querySelector('.container');

function createCard(character) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('title');
    const cardTitleH1 = document.createElement('h1');
    cardTitleH1.innerHTML = character.name;
    cardTitle.append(cardTitleH1);

    const cardStatus = document.createElement('div');
    cardStatus.classList.add('status');
    const cardLiveStatus = document.createElement('div');
    cardLiveStatus.classList.add('live-status');

    const cardStatusP = document.createElement('p');
    const cardStatusPText = document.createTextNode(`${character.species} -- ${character.status}`);
    if (character.status === 'Dead') {
        cardLiveStatus.classList.add('dead')
    }
    cardStatus.append(cardLiveStatus);
    cardStatusP.append(cardStatusPText);
    cardStatus.append(cardStatusP);
    cardTitle.append(cardStatus);
    cardInfo.append(cardTitle);

    const cardContent = document.createElement('div');
    cardContent.classList.add('content');
    const cardContentText = document.createTextNode(`${character.location.name}`);
    cardContent.append(cardContentText);
    cardInfo.append(cardContent);

    card.append(cardInfo);

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const image = document.createElement('img');
    image.src = character.image;
    image.alt = character.name
    cardImage.append(image);
    card.append(cardImage);

    container.append(card);
    return card
}

function getRandomNumbers() {
    const numbers = [];
    while (numbers.length < 10) {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function getCharacters() {
    const numbers = getRandomNumbers();
    const promise = fetch(`https://rickandmortyapi.com/api/character/${numbers}`)
    promise
        .then((res) => res.json())
        .then(data => {
            for (const character of data) {
                createCard(character)
            }})
        .catch(error => console.error(error))
}
getCharacters()

