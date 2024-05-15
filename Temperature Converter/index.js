const convertBtn = document.getElementById("temperature__converter__submit__id");
let numberInput;
let fahrenheit;
let celsius;
let output;

convertBtn.addEventListener("click", () => {
    numberInput = document.getElementById("temperature__converter__number__id");
    fahrenheit = document.getElementById("temperature__converter__fahrenheit__id");
    celsius = document.getElementById("temperature__converter__celsius__id");
    output = document.getElementById("temperature__converter__output__id");

    if (numberInput.value == "") {
        output.innerText = "please enter a number you'd like to convert";
    } else if (!fahrenheit.checked && !celsius.checked) {
        output.innerText = "Please select either Fahrenheit or Celsius";
    } else {
        if (fahrenheit.checked) {
            let inputValue = Number(numberInput.value);
            let convertValue = ((inputValue * 9 / 5) + 32);

            if (convertValue <= 28) {
                output.innerText = `${convertValue} ° F🥶`;
            } else if (convertValue >= 50) {
                output.innerText = `${convertValue} ° F🥵`;
            } else {
                output.innerText = `${convertValue} ° F🦦`
            }

        } else if (celsius.checked) {
            let inputValue = Number(numberInput.value);
            let convertValue = Math.floor(((inputValue - 32) * 5 / 9));

            if (convertValue <= 10) {
                output.innerText = `${convertValue} ° C🥶`;
            } else if (convertValue >= 28) {
                output.innerText = `${convertValue} ° C🥵`;
            } else {
                output.innerText = `${convertValue} ° C🦦`
            }
        }
    }
})
