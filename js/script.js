
const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const calculationArea = document.getElementById("calculationArea");


function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(2);
}


function updateCalculationText(celsius, fahrenheit) {
  calculationArea.value = `Formula: °F = (°C x 9/5) + 32`;
}


document.getElementById("button-convert").addEventListener("click", function() {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    alert("Silahkan masukkan angka untuk suhu Celcius!");
    return;
  }

  const fahrenheit = convertToFahrenheit(celsius);
  fahrenheitOutput.value = fahrenheit;
  updateCalculationText(celsius, fahrenheit);
});

document.getElementById("button-reset").addEventListener("click", function() {
  celsiusInput.value = "";
  fahrenheitOutput.value = "";
  calculationArea.value = "";
});