//BMI Rechner
function calculateBMI() {
  let heightInput = document.getElementById("height");
  let weightInput = document.getElementById("weight");
  let resultDiv = document.getElementById("result");

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultDiv.innerHTML = "Please enter valid height and weight.";
    return;
  }

  let bmi = weight / ((height / 100) ** 2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}

//Calculator
function Ergebnis()
{
  let x = 0;
  x = eval(window.document.Rechner.Display.value);
  window.document.Rechner.Display.value = x;
}
function Hinzufuegen(Zeichen)
{
  window.document.Rechner.Display.value =
    window.document.Rechner.Display.value + Zeichen;
}
function Sonderfunktion(Funktion)
{
  if(Funktion == "sqrt")
  {
    let x = 0;
    x = eval(window.document.Rechner.Display.value);
    window.document.Rechner.Display.value = Math.sqrt(x);
  }
}
