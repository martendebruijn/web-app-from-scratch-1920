const rgbToHex = function(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

const changeFullColor = function() {
  const redSlider = document.querySelector('#red');
  const redOutput = document.querySelector('#redOutput');
  const greenSlider = document.querySelector('#green');
  const greenOutput = document.querySelector('#greenOutput');
  const blueSlider = document.querySelector('#blue');
  const blueOutput = document.querySelector('#blueOutput');
  let resultHex = '';

  let colorObject = {
    red: redSlider.value,
    green: greenSlider.value,
    blue: blueSlider.value,
  };
  function changeValue(sliderEl, outputEl) {
    sliderEl.oninput = function() {
      const key = this.id;
      outputEl.innerText = this.value;
      colorObject[key] = rgbToHex(this.value);
      resultHex = colorObject.red + colorObject.green + colorObject.blue;
      Object.keys(colorObject).forEach(key => {
        if (colorObject[key] == 0) {
          colorObject[key] = '00';
        }
      });
      console.log(colorObject);
      console.log('#' + resultHex);
    };
  }
  changeValue(redSlider, redOutput);
  changeValue(greenSlider, greenOutput);
  changeValue(blueSlider, blueOutput);
};

changeFullColor();
