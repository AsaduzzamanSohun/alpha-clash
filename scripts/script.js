function hideElementById(hideId){

    const homeScreen = document.getElementById(hideId);
    homeScreen.classList.add('hidden');

}

function showElementById(showId){

    const playgroundScreen = document.getElementById(showId);
    playgroundScreen.classList.remove('hidden');

}

function setBackgroundColorById(elementId){

    const setBackgroundColor = document.getElementById(elementId);
    setBackgroundColor.classList.add('bg-orange-400');

}

function removeBackgroundColorById(elementId){

    const removeBackgroundColor = document.getElementById(elementId);
    removeBackgroundColor.classList.remove('bg-orange-400');
}


function getElementTextById(elementId){

    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    return elementValue;

}


function getElementTextValueById(elementId){

    const element = document.getElementById(elementId);
    const valueText = element.innerText;
    const value = parseInt(valueText);
    return value;

}

function setElementTextValueById(elementId, value){

    const element = document.getElementById(elementId);
    element.innerText = value;

}


function getRandomAlphabet(){

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomIndex = Math.random()*25;
    const index = Math.round(randomIndex);

    const alphabet = alphabets[index];

    return alphabet;

}