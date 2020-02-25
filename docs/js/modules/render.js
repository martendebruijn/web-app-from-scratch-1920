import { router } from './router.js';

export const render = {
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
    <a href="#search" id="searchBtn" class="button">Search</a>
  </div>`
    );
  },

  overview: function(items) {
    const id = document.querySelector('#wrapper');
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
    });
  },
  colorCircle: function(color) {
    const colorWrapper = document.querySelector('#colorWrapper');
    const circleEl = document.createElement('div');
    circleEl.classList.add('color-circle');
    circleEl.style.backgroundColor = color.hex;
    colorWrapper.appendChild(circleEl);
  },
  detail: function(item) {
    const artObject = item[0];
    this.remove();
    const wrapper = document.querySelector('#wrapper');

    // //insert art object in the wrapper div
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

    artObject.colors.forEach(color => render.colorCircle(color));
  },
  remove: function() {
    document.querySelector('#wrapper').innerHTML = '';
  },
  backBtn: function() {
    const backBtn = document.querySelector('#backBtn');
    backBtn.addEventListener('click', router.goBack);
  },
};
