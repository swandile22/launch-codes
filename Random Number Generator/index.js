const generateBtn = document.getElementById("roll__btn");
const randomNumberLabel1 = document.getElementById("my__random__number1");
const randomNumberLabel2 = document.getElementById("my__random__number2");
const randomNumberLabel3 = document.getElementById("my__random__number3");
let randomNumber1;
let randomNumber2;
let randomNumber3;


generateBtn.onclick = function () {
    randomNumber1 =  Math.floor(Math.random() * 6 + 1);
    randomNumber2 =  Math.floor(Math.random() * 6 + 1);
    randomNumber3 =  Math.floor(Math.random() * 6 + 1);
    randomNumberLabel1.textContent = `${randomNumber1}`
    randomNumberLabel2.textContent = `${randomNumber2}`
    randomNumberLabel3.textContent = `${randomNumber3}`
}
