const key = 'JeYMqBl9';
let argument = 'involvedMaker=Rembrandt+van+Rijn';
let objects = [];
let i = 0;

fetch(
  `https://www.rijksmuseum.nl/api/nl/collection?key=${key}&involvedMaker=Vincent+van+Gogh`
)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    myJson.artObjects.forEach(element => objects.push(element.objectNumber));
    objects.forEach(element =>
      fetch(
        `https://www.rijksmuseum.nl/api/nl/collection/${element}?key=${key}`
      )
        .then(response2 => {
          return response2.json();
        })
        .then(myJson2 => {
          if (myJson2.artObject.colors.length > 0) {
            let result = document.createElement('div');
            let colorWrapper = document.createElement('div');
            result.id = `result${i}`;
            colorWrapper.id = `wrapper${i}`;
            colorWrapper.classList.add('colorWrapper');
            document.body.appendChild(result);
            let title = document.createElement('h2');
            title.innerHTML = myJson2.artObject.title;
            document.querySelector(`#result${i}`).appendChild(title);
            document.querySelector(`#result${i}`).appendChild(colorWrapper);
            for (
              let z = 0, length = myJson2.artObject.colors.length;
              z < length;
              z++
            ) {
              let colorBlock = document.createElement('div');
              colorBlock.classList.add('colorBlock');
              colorBlock.style.backgroundColor =
                myJson2.artObject.colors[z].hex;
              document.querySelector(`#wrapper${i}`).appendChild(colorBlock);
            }
            i++;
          }
        })
    );
  });
