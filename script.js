const iptbox = document.getElementById("textbox");
const toF = document.getElementById("toFahrenheit");
const toC = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(iptbox.value); // Get numeric input value

    if (toF.checked) {
       temp = (temp * 9/5) + 32;
       result.textContent = temp.toFixed(2) + " °F"; // Display formatted result
    } 
    else if (toC.checked) {
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " °C"; // Display formatted result
    } 
    else {
        result.textContent = "Select a unit!";
    }
}
