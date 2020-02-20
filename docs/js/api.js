import { color, getClosestColor } from './color.js';
import { data } from './data.js';
import { render } from './render.js';

const requestPaintings = function() {
  const key = 'JeYMqBl9';
  const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection?key=';
  const amountProperty = '&ps=';
  const amount = 10;
  const colorProperty = '&f.normalized32Colors.hex=%23';
  const closestColor = getClosestColor();
  const _color = color.fullHex(closestColor.r, closestColor.g, closestColor.b);
  // const color = '737C84';

  console.log(baseUrl + key + amountProperty + amount + colorProperty + _color);

  fetch(baseUrl + key + amountProperty + amount + colorProperty + _color)
    .then(response => {
      return response.json();
    })
    .then(result => {
      if (result.artObjects.length == 0) {
        render.remove('wrapper');
        render.none();
      } else {
        console.log(result);
        console.log(data.filter(result));
        render.remove('wrapper');
        render.schilderijen(result);
        return result;
      }
    });
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', requestPaintings);
