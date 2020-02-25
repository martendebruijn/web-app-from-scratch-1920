import { data } from './data.js';

export const render = {
  //todo: add chooseColorPage
  chooseColor: function() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.insertAdjacentHTML(
      'afterbegin',
      `      <h3>
    *Het Rijksmuseum labelt haar archief in een selectief aantal kleuren,
    hierdoor kan er niet daadwerkelijk naar iedere kleur gezocht worden. Het
    dichtsbijzijnde kleur-label wordt gekozen en opgezocht.
  </h3>
  <div id="chooseColor">
    <div>
      <div>
        <div>
          <p>Rood:</p>
          <p id="redOutput">0</p>
          <input id="red" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
        <div>
          <p>Groen:</p>
          <p id="greenOutput">0</p>
          <input id="green" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
        <div>
          <p>Blauw:</p>
          <p id="blueOutput">0</p>
          <input id="blue" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
      </div>
      <div>
        <p>Gekozen kleur:</p>
        <span class="resultColor color-circle"></span>
      </div>
      <div>
        <p>Gezochte kleur:</p>
        <span class="searchColor color-circle"></span>
      </div>
    </div>
    <button id="searchBtn">Search</button>
  </div>`
    );
  },

  overview: function(item) {
    const id = document.querySelector('#wrapper');
    const items = data.filterOverview(item);
    let i = 0;
    //insert every object in the #wrapper div for the overview page
    items.forEach(function(item) {
      id.insertAdjacentHTML(
        'afterbegin',
        `<a href="#${item.id}">
          <p>${item.title}</p>
          <p>${item.maker}</p>
          <img src="${item.imgUrl}" class="overview-img" alt="${item.title}">
        </a>`
      );
      i++;
    });
  },
  detail: function(item) {
    console.log('hallo ik ben de detail render met dit id: ' + item);
    this.remove();
    const cleanData = data.filterDetail(item); //filter the data
    const wrapper = document.querySelector('#wrapper');
    const artObject = cleanData[1];
    const colors = cleanData[0];

    //insert art object in the wrapper div
    wrapper.insertAdjacentHTML(
      'afterbegin',
      '<p>' +
        artObject.title +
        '</p>' +
        `<img src="${artObject.imgUrl}" class="detail-img" alt="${artObject.title}">
        <p>${artObject.type}</p>
        <p>${artObject.maker}</p>
        <p>${artObject.date}</p>
        <div id="colorWrapper"></div>`
    );
    colors.forEach(color => createColorCircle(color));
    function createColorCircle(color) {
      const colorWrapper = document.querySelector('#colorWrapper');
      const colorCircle = document.createElement('div');

      colorCircle.classList.add('color-circle');
      colorCircle.style.backgroundColor = color;
      colorWrapper.appendChild(colorCircle);
    }
  },
  remove: function() {
    document.querySelector('#wrapper').innerHTML = '';
  },
};
