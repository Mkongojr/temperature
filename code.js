const text1 = document.getElementById("text1");
const tofahreinheit = document.getElementById("tofahreinheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

let temp;

function convert() {
  if (tofahreinheit.checked) {
    temp = Number(text1.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "°F";
  } else if (tocelsius.checked) {
    temp = Number(text1.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp + "°C";
  } else {
    result.textContent = "choose what to do";
  }
}
