import { color } from './color.js';
import { data } from './data.js';
import { render } from './render.js';

export const api = {
  requestPaintings: function() {
    const key = 'JeYMqBl9';
    const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection?key=';
    const amountProperty = '&ps=';
    const amount = 10;
    const colorProperty = '&f.normalized32Colors.hex=%23';
    const closestColor = color.getClosestColor();
    const _color = color.fullHex(
      closestColor.r,
      closestColor.g,
      closestColor.b
    );

    console.log(
      baseUrl + key + amountProperty + amount + colorProperty + _color
    );

    return fetch(
      baseUrl + key + amountProperty + amount + colorProperty + _color
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        return result;
      });
  },
};
// const requestPaintings =
