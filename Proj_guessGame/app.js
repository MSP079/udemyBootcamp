let maximum = parseInt(prompt("Enter the maximim number!"));
while (!maximum) {
    maximum = parseInt(prompt("enter a vlaid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
        attempts++;
    } else if (guess < targetNum) {
        guess = parseInt(prompt("Too Low! Enter a new guess:"));
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit")
    }
}

if (guess === 'q') {
    console.log("Ok, YOU Quit");
} else {
    console.log("CONRATES YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`);
}