function calculateEHP() {
  const hp = parseFloat(document.getElementById('hp').value);
  const def = parseFloat(document.getElementById('def').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(hp) || isNaN(def) || hp < 0 || def < 0) {
    alert("Please enter valid, non-negative numbers.");
    resultDiv.textContent = "EHP: -";
    return;
  }

  const ehp = hp * (def + 50) / 50;
  resultDiv.textContent = `EHP: ${ehp.toFixed(2)}`;
}
