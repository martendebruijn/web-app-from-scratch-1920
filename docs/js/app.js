const key = 'JeYMqBl9';
let argument = 'involvedMaker=Rembrandt+van+Rijn';
let objects = [];
let i = 0;

fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${key}&involvedMaker=Vincent+van+Gogh`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    myJson.artObjects.forEach(element => objects.push(element.objectNumber));
    objects.forEach(element => 
        fetch(`https://www.rijksmuseum.nl/api/nl/collection/${element}?key=${key}`)
        .then((response2) => {
        return response2.json();
        })
        .then((myJson2) => {
            if (myJson2.artObject.colors.length > 0) {
            let result = document.createElement('div');
            result.id = `result${i}`;
            document.body.appendChild(result);
            let title = document.createElement('h2');
            let bar = document.createElement('div');
            bar.classList.add('bar');
            title.innerHTML = myJson2.artObject.title;
            myJson2.artObject.colors.forEach(element => { 

                // COLOR DIV WERKT NOG NIET SOEPEL
                let colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = element.hex;
                colorDiv.style.width = '20px';
                colorDiv.style.height = '20px';
                let res = document.querySelector(`#result${i}`)
                res.querySelectorAll(".bar").appendChild(colorDiv)
                })
            document.querySelector(`#result${i}`).appendChild(title);
            document.querySelector(`#result${i}`).appendChild(bar);
            i++;
        }
        }))
  });

  
    

