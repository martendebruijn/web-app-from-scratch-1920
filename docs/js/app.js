//rewrite this code with for... or forEach or Map or something

const sliderValue = function() {
  const redSlider = document.querySelector('#red');
  const redOutput = document.querySelector('#redOutput');
  const greenSlider = document.querySelector('#green');
  const greenOutput = document.querySelector('#greenOutput');
  const blueSlider = document.querySelector('#blue');
  const blueOutput = document.querySelector('#blueOutput');

  const changeValue = function(sliderEl, outputEl) {
    sliderEl.oninput = function() {
      outputEl.innerHTML = this.value;
    };
  };

  changeValue(redSlider, redOutput);
  changeValue(greenSlider, greenOutput);
  changeValue(blueSlider, blueOutput);
};

sliderValue();
