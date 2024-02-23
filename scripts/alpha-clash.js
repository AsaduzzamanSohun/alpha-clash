function handleKeyboardKeyUpEvent(event){

    const keyPressed = event.key;

    const currentAlphabetById = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetById.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    console.log(keyPressed, expectedAlphabet);

    if(keyPressed === expectedAlphabet){

        // ----------------- Current Score ----------------------
        const currentScore = getElementTextValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementTextValueById('current-score', updatedScore);


        // ----------------- Contineu game ---------------------- 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }

    else if(keyPressed == 'Escape'){
        gameOver();
    }

    else{
        
        // ----------------- Current Life ----------------------

        const currentLife = getElementTextValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementTextValueById('current-life', updatedLife);

        if(updatedLife === 0){

            gameOver();

        }

    }

}

document.addEventListener("keyup", handleKeyboardKeyUpEvent)



function continueGame(){

    const alphabet = getRandomAlphabet();

    const alphabetDisplay = document.getElementById('current-alphabet');
    alphabetDisplay.innerText = alphabet;

    setBackgroundColorById(alphabet)

}


function play(){
    hideElementById("home-screen");
    hideElementById("final-screen")
    showElementById("playground-screen");

    continueGame()

    setElementTextValueById('current-score', 0);
    setElementTextValueById('current-life', 5);


}


function gameOver(){

    hideElementById("playground-screen")
    showElementById("final-screen");


    // Result Update
    const lastScore = document.getElementById('current-score');
    const scoreValue = lastScore.innerText;

    setElementTextValueById('last-score', scoreValue);

    // Remove Background Color

    const currentAlphabet = getElementTextById("current-alphabet");

    removeBackgroundColorById(currentAlphabet);


}
