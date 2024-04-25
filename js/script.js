document.getElementById("convertForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;

  if (isNaN(temperature)) {
      alert("Silahkan masukkan angka untuk suhu!");
      return;
  }

  let convertedTemp, explanation;
  if (unit === "celsius") {
      convertedTemp = (temperature * 9/5) + 32;
      explanation = `${temperature}°C = ${convertedTemp.toFixed(2)}°F`;
  } else {
      convertedTemp = (temperature - 32) * 5/9;
      explanation = `${temperature}°F = ${convertedTemp.toFixed(2)}°C`;
  }

  document.getElementById("hasilKonversi").innerHTML = `Hasil Konversi: ${convertedTemp}`;
  document.getElementById("explanation").innerHTML = explanation;
});