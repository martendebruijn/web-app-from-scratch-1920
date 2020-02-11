const requestPaintings = function() {
  const key = 'JeYMqBl9';
  const baseUrl = 'https://www.rijksmuseum.nl/api/nl/collection?key=';
  const resultAmount = '&ps=30';
  const colorProperty = '&f.normalized32Colors.hex=%234279DB';

  fetch(baseUrl + key + resultAmount + colorProperty)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
};

// requestPaintings();
