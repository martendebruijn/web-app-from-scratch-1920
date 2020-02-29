import { router } from './router.js';

export const render = {
  loader: function() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.insertAdjacentHTML(
      'afterbegin',
      '<p id="loader">ik ben aan het laden...</p>'
    );
  },
  chooseColor: function() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.insertAdjacentHTML(
      'afterbegin',
      `<p>Ontdek de kunstwerken van het rijksmuseum eens op een andere manier dan je gewend bent.
      Geef hieronder een kleur aan en laat je verassen door de kunst!</p>
   <div id="chooseColor">
    <div>
      <div>
        <div>
          <p id="redOutput" class="d-none">0</p>
          <input id="red" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
        <div>
          <p id="greenOutput" class="d-none">0</p>
          <input id="green" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
        <div>
          <p id="blueOutput" class="d-none">0</p>
          <input id="blue" class="color-slider" type="range" min="0" max="255" value="0"/>
        </div>
      </div>
      <div>
        <p class="d-none">Gekozen kleur:</p>
        <div class="resultColor color-box"></div>
      </div>
      <div class="d-none">
        <p>Gezochte kleur:</p>
        <div class="searchColor color-circle"></div>
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
        `<a class="card" href="#${item.id}">
        <img src="${item.imgUrl}" class="overview-img" alt="${item.title}">
        <div>
           <h2>${item.title}</h2>
           <h3>${item.maker}</h3>
        </div>
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
    this.remove('wrapper');
    const wrapper = document.querySelector('#wrapper');

    // insert art object in the wrapper div
    wrapper.insertAdjacentHTML(
      'afterbegin',
      '<h1 class="f-start">' +
        artObject.title +
        '</h1>' +
        `<img src="${artObject.imgUrl}" class="detail-img f-start" alt="${artObject.title}">
        <p class="bold f-start">${artObject.maker}</p>
         <p class="f-start">${artObject.type}</p>
         
         <p class="f-start">${artObject.date}</p>
         <div id="colorWrapper" class="f-start"></div>`
    );

    artObject.colors.forEach(color => render.colorCircle(color)); //creeer een circle voor iedere kleur
  },
  remove: function(id) {
    document.getElementById(id).innerHTML = '';
  },
  backBtn: function() {
    const backBtn = document.querySelector('#backBtn');
    backBtn.addEventListener('click', router.goBack);
  },
};
