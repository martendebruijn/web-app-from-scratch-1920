/* Source: https://campushippo.com/lessons/how-to-convert-rgb-colors-to-hexadecimal-with-javascript-78219fdb */
function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
}
// some random comment
function changeToHex(r, g, b) {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
}

function __test(x) {
  const map = new Map(Object.entries(x));
  console.log(map);
  return map;
}

export function choose() {
  const sliders = [
    {
      sliderEl: document.querySelector('#red'),
      outputEl: document.querySelector('#redOutput'),
    },
    {
      sliderEl: document.querySelector('#green'),
      outputEl: document.querySelector('#greenOutput'),
    },
    {
      sliderEl: document.querySelector('#blue'),
      outputEl: document.querySelector('#blueOutput'),
    },
  ];

  const rgbColor = { red: 0, green: 0, blue: 0 };

  sliders.forEach(changeRgbValue);
  function changeRgbValue(item) {
    item.sliderEl.oninput = function input() {
      const key = item.sliderEl.id;
      const result = document.querySelector('.resultColor');
      rgbColor[key] = this.value;
      item.outputEl.innerText = this.value;
      result.style.backgroundColor = `rgb(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue})`;
      const hexColor = changeToHex(rgbColor.red, rgbColor.green, rgbColor.blue);
      document.querySelector('#demo').innerText = hexColor;

      // for (let [key, value] of Object.entries(rgbColor)) {
      //   `${key}: ${value}`;

      // }
      /* https://dev.to/attacomsian/object-entries-and-object-values-methods-in-javascript-3l8c */
      // const entries = Object.entries(rgbColor);
      // console.log(entries);
      __test(rgbColor);
    };
  }
}
