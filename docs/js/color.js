export const color = {
  /* Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb */
  rgbToHex: function(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  },
  fullHex: function(r, g, b) {
    const red = color.rgbToHex(r);
    const green = color.rgbToHex(g);
    const blue = color.rgbToHex(b);
    return red + green + blue;
  },
  changeValue: function(sliderEl, outputEl) {
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
  },
  fullValue: function() {
    const redSlider = document.querySelector('#red');
    const redOutput = document.querySelector('#redOutput');
    const greenSlider = document.querySelector('#green');
    const greenOutput = document.querySelector('#greenOutput');
    const blueSlider = document.querySelector('#blue');
    const blueOutput = document.querySelector('#blueOutput');

    color.changeValue(redSlider, redOutput);
    color.changeValue(greenSlider, greenOutput);
    color.changeValue(blueSlider, blueOutput);
  },
  colorToHex: function() {
    const red = document.querySelector('#red');
    const green = document.querySelector('#green');
    const blue = document.querySelector('#blue');
    const redValue = red.value;
    const greenValue = green.value;
    const blueValue = blue.value;
    const hexColor = color.fullHex(redValue, greenValue, blueValue);
    return hexColor.toUpperCase(); //Rijksmuseum API accepteert alleen hoofdletters (+ cijfers)
  },
  closestHex: function() {
    //
  },
};

/* https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
function colorDifference(r1, g1, b1, r2, g2, b2) {
  var sumOfSquares = 0;

  sumOfSquares += Math.pow(r1 - r2, 2);
  sumOfSquares += Math.pow(g1 - g2, 2);
  sumOfSquares += Math.pow(b1 - b2, 2);

  return Math.sqrt(sumOfSquares);
}

function rijksmuseumColorsToRgb() {
  // De kleurcodes die de rijksmuseum API ondersteund
  // prettier-ignore
  const rijksmuseumColorsHex = [ '#737C84', '#FBF6E1', '#2F4F4F', '#E0CC91', '#FBF6E1', '#000000', '#B5BFCC',
  '#737C84', '#B35A1F', '#E0CC91', '#F6ECF3', '#B5BFCC', '#F6ECF3', '#981313', '#F49B7A', '#2F4F4F', '#DDA5AA',
  '#E09714', '#367614', '#4019B1', '#4279DB', '#DE4153', '#62AD77', '#8268DC', '#850085', '#981313',
  '#DDA5AA', '#DF4C93', '#FFEB00', '#4279DB'
  ];

  let rijksmuseumRgb = [];
  rijksmuseumColorsHex.map(item => rijksmuseumRgb.push(hexToRgb(item)));
  return rijksmuseumRgb;
}

console.log(
  colorDifference(
    255,
    255,
    255,
    rijksmuseumColorsToRgb()[0].r,
    rijksmuseumColorsToRgb()[0].g,
    rijksmuseumColorsToRgb()[0].b
  )
);
console.log(
  colorDifference(
    255,
    255,
    255,
    rijksmuseumColorsToRgb()[1].r,
    rijksmuseumColorsToRgb()[1].g,
    rijksmuseumColorsToRgb()[1].b
  )
); //deze moet winnen

const closest = rijksmuseumColorsToRgb().reduce(function(prev, curr) {
  return colorDifference(255, 255, 255, curr.r, curr.g, curr.b) <
    colorDifference(255, 255, 255, prev.r, prev.g, prev.b)
    ? curr
    : prev;
});

console.log(closest);
console.table(rijksmuseumColorsToRgb());

/* https://www.reddit.com/r/learnprogramming/comments/18vjlm/javascript_find_closest_color_in_an_array_of/ */

// console.log(colorDifference(200, 200, 200, 255, 255, 255)); //expected winner kleinst
// console.log(colorDifference(125, 125, 125, 255, 255, 255)); //middel
// console.log(colorDifference(100, 100, 100, 255, 255, 255)); //kleinst
