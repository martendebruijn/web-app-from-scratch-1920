/* Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb */
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}

function changeToHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
}

function changeColorValue(sliderEl, outputEl) {
  sliderEl.oninput = function input() {
    const colorValue = this.value;
    const result = document.querySelector('.resultColor');
    const red = document.querySelector('#red');
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;

    outputEl.innerText = colorValue;
    result.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };
}

export function changeFullColorValues() {
  const redSlider = document.querySelector('#red');
  const redOutput = document.querySelector('#redOutput');
  const greenSlider = document.querySelector('#green');
  const greenOutput = document.querySelector('#greenOutput');
  const blueSlider = document.querySelector('#blue');
  const blueOutput = document.querySelector('#blueOutput');

  changeColorValue(redSlider, redOutput);
  changeColorValue(greenSlider, greenOutput);
  changeColorValue(blueSlider, blueOutput);
}

export function colorToHex() {
  const red = document.querySelector('#red');
  const green = document.querySelector('#green');
  const blue = document.querySelector('#blue');
  const redValue = red.value;
  const greenValue = green.value;
  const blueValue = blue.value;
  const hexColor = changeToHex(redValue, greenValue, blueValue);
  return hexColor.toUpperCase(); //Rijksmuseum API accepteert alleen hoofdletters (+ cijfers)
}
