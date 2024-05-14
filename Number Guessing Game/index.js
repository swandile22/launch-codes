const minNum = 1;
const maxNum = 3;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guessNumber;
let attempts = 0;
let isRunning = true;



while(isRunning) {
  guessNumber = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);

  if(isNaN(guessNumber)) {
      window.alert(`${guessNumber} is not a number🙅‍♂️, please enter a number between ${minNum} and ${maxNum}`);
  } else if(guessNumber < minNum || guessNumber > maxNum) {
      window.alert(`${guessNumber} is either Lower than ${minNum} or Higher than ${maxNum}🤔`);
  } else {
      attempts++
      if(guessNumber < randomNumber) {
          window.alert(`${guessNumber} is too low!, try again🙆‍♂️`);
      } else if(guessNumber > randomNumber) {
          window.alert(`${guessNumber} is too High!, try again🙆‍♂️`);
      } else {
          window.alert(`Number: ${randomNumber}\nYou guessed that in ${attempts} attempts, you're a wizard🧙‍♂️`);
          isRunning = false;

      }
  }
}






