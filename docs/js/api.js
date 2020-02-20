import { colorToHex } from './color.js';
import { data } from './data.js';

const requestPaintings = function() {
  const key = 'JeYMqBl9';
  const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection?key=';
  const amountProperty = '&ps=';
  const amount = 10;
  const colorProperty = '&f.normalized32Colors.hex=%23';
  const color = colorToHex();
  // const color = '737C84';

  console.log(baseUrl + key + amountProperty + amount + colorProperty + color);

  fetch(baseUrl + key + amountProperty + amount + colorProperty + color)
    .then(response => {
      // console.log(response.json());
      return response.json();
    })
    .then(result => {
      if (result.artObjects.length == 0) {
        const feedback = 'Geen schilderijen gevonden bij deze kleur';
        console.log(feedback);
      } else {
        console.log(result);
        console.log(data.filter(result));
        return result;
      }
    });
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', requestPaintings);
