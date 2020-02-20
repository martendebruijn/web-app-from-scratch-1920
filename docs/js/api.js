import { colorToHex } from './color.js';

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
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', requestPaintings);
