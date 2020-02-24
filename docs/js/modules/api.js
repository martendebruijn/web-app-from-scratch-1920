import { color } from './color.js';

export const api = {
  requestPaintings: function() {
    //change name to requestObjects()
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
    const url =
      baseUrl + key + amountProperty + amount + colorProperty + _color;

    console.log(url);

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        return result;
      });
  },
  requestDetail: function(id) {
    const key = 'JeYMqBl9';
    const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection/';
    let objectId = id;
    const keyProperty = '?key=';
    const url = baseUrl + objectId + keyProperty + key;
    console.log(url);
    return fetch(url)
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
