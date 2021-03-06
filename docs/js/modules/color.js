export const color = {
  /* Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb */
  rgbToHex: function(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex.toUpperCase(); //Rijksmuseum API accepteert alleen hoofdletters (+ cijfers)
  },
  fullHex: function(r, g, b) {
    //wordt aangeroepen door api.requestArtObjects
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return red + green + blue;
  },
  getSliderValue: function() {
    const red = document.querySelector('#red');
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;
    return { r: redValue, g: greenValue, b: blueValue };
  },
  changeSliderValue: function(sliderEl, outputEl) {
    sliderEl.oninput = function input() {
      const colorValue = this.value;
      const result = document.querySelector('.resultColor');
      const redValue = color.getSliderValue().r;
      const greenValue = color.getSliderValue().g;
      const blueValue = color.getSliderValue().b;

      outputEl.innerText = colorValue;
      result.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    };
  },
  changeAllSliderValues: function() {
    const redSlider = document.querySelector('#red');
    const redOutput = document.querySelector('#redOutput');
    const greenSlider = document.querySelector('#green');
    const greenOutput = document.querySelector('#greenOutput');
    const blueSlider = document.querySelector('#blue');
    const blueOutput = document.querySelector('#blueOutput');

    this.changeSliderValue(redSlider, redOutput);
    this.changeSliderValue(greenSlider, greenOutput);
    this.changeSliderValue(blueSlider, blueOutput);
  },

  /* Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
  hexToRgb: function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16), //hexadecimal numeric system is used, so a hexadecimal number must be parsed to a decimal number
          g: parseInt(result[2], 16), 
          b: parseInt(result[3], 16),
        }
      : null; 
  },

  rijksmuseumColorsToRgb: function() {
    // De kleurcodes die de rijksmuseum API ondersteund:
    // prettier-ignore
    const rijksmuseumColorsHex = [ '#737C84', '#FBF6E1', '#2F4F4F', '#E0CC91', '#FBF6E1', '#000000', '#B5BFCC',
    '#737C84', '#B35A1F', '#E0CC91', '#F6ECF3', '#B5BFCC', '#F6ECF3', '#981313', '#F49B7A', '#2F4F4F', '#DDA5AA',
    '#E09714', '#367614', '#4019B1', '#4279DB', '#DE4153', '#62AD77', '#8268DC', '#850085', '#981313',
    '#DDA5AA', '#DF4C93', '#FFEB00', '#4279DB'
    ];

    const rijksmuseumRgb = [];
    rijksmuseumColorsHex.map(item => rijksmuseumRgb.push(this.hexToRgb(item))); //change the hex color codes to rgb color values
    return rijksmuseumRgb;
  },

  /* Source: https://www.reddit.com/r/learnprogramming/comments/18vjlm/javascript_find_closest_color_in_an_array_of/ */
  colorDifference: function(r1, g1, b1, r2, g2, b2) {
    let sumOfSquares = 0;

    sumOfSquares += Math.pow(r1 - r2, 2);
    sumOfSquares += Math.pow(g1 - g2, 2);
    sumOfSquares += Math.pow(b1 - b2, 2);

    return Math.sqrt(sumOfSquares); //Hoe kleiner dit getal, hoe dichterbij de kleur.
  },
  /* Inspired by: https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array */
  sortOnColorDif: function(prev, curr) {
    const redValue = color.getSliderValue().r;
    const greenValue = color.getSliderValue().g;
    const blueValue = color.getSliderValue().b;
    // prettier-ignore
    return color.colorDifference(redValue, greenValue, blueValue, curr.r, curr.g, curr.b) //calculate the color difference between the values of the sliders and the current color values
    <
      color.colorDifference(redValue, greenValue, blueValue, prev.r, prev.g, prev.b) //calculate the color difference between the values of the sliders and the previous values
      ? curr : prev; //sort? need more explaination!
  },
  getClosestColor: function() {
    //wordt aangeroepen door api.requestArtObjects
    const rijksmuseumRgb = this.rijksmuseumColorsToRgb(); //converteer de hex kleur codes van het rijksmusuem naar rgb waardes
    const closest = rijksmuseumRgb.reduce(this.sortOnColorDif); //verkrijg de dichtsbijzijnde kleur
    const searchColorEl = document.querySelector('.searchColor');
    searchColorEl.style.backgroundColor = `rgb(${closest.r},${closest.g},${closest.b})`; //change bg of the searched color element
    return closest; //de kleur die het dichtsbij zit, wordt doorgegeven aan de fetch call
  },
};
