// alert("This is rock, paper, scissor game.");
var score = 0;

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function value(str) {
    if (str === "rock") { return 1; }
    else if (str === "paper") { return 2; }
    else if (str === "scissor") { return 3; }
    else { 
        console.error("Invalid input!"); 
        return null; 
    }
}

function valuename(choice) {
    if (choice == 1) { return "rock"; }
    else if (choice == 2) { return "paper"; }
    else if (choice == 3) { return "scissor"; }
}

// Update the result display
function updateResult(message) {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML += message ;
    }
}

function makescore(yourchoice, computerChoice) {
    let resultMessage = "";
    if (computerChoice == yourchoice) {
        resultMessage = `<p>It's a tie! Both you and the computer chose ${valuename(yourchoice)}.</p>`;
    } else if ((yourchoice == 1 && computerChoice == 2) || 
               (yourchoice == 3 && computerChoice == 1) || 
               (yourchoice == 2 && computerChoice == 3)) {
        resultMessage = `<p>You lose! You lost this round with ${valuename(yourchoice)}. The computer chose ${valuename(computerChoice)}.</p>`;
    } else {
        resultMessage = `<p>Congratulations! You win this round with ${valuename(yourchoice)}. The computer chose ${valuename(computerChoice)}.</p>`;
        score += 20;
    }
    updateResult(resultMessage);
    updateResult(`Your Score: ${score}`);
}

// Handle image click
function chooseImage(choice, carouselId) {
    console.log(`User choice: ${choice}`);
    var str = choice;

    document.querySelector('.head h1').textContent = `You choose: ${choice}`;

    // Hide the carousel and show the selected image
    const carouselElement = document.getElementById(carouselId);
    if (carouselElement) {
        carouselElement.style.display = 'none';
    }

    const userImage = document.getElementById(`user-${choice}`);
    if (userImage) {
        userImage.style.display = 'block';
    }

    // Generate computer choice and display it
    var computerChoice = getRandomInt(1, 3);
    let comchoice = valuename(computerChoice);
    console.log(comchoice);
    document.querySelector('.head2 h1').textContent = `Computer choice: ${comchoice}`;

    // Hide the computer's carousel and show the selected image
    const carousel = document.getElementById('carouselExampleSlidesOnlyComputer');
    if (carousel) {
        carousel.style.display = 'none';
    }

    const computerImage = document.getElementById(`computer-${comchoice}`);
    if (computerImage) {
        computerImage.style.display = 'block';
    }

    var yourchoice = value(str);
    console.log(str);
    console.log(yourchoice);

    if (yourchoice != null) {
        console.log(`<h2> You chose: ${str}</h2>`);
        console.log(`<h2> Computer chose: ${valuename(computerChoice)}</h2><hr />`);
        makescore(yourchoice, computerChoice);  // Pass computerChoice as an argument
    } else {
        console.log("choose from rock, paper, or scissors only");
    }
}

// Initialize the game
(function initGame() {
    console.log("Game initialized.");
})();
