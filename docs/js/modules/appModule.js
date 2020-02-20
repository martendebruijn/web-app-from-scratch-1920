import { color } from './color.js';
import { api } from './api.js';
// import { router } from './routieModule.js';

export const appModule = {
  init: function() {
    color.fullValue();
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', api.requestPaintings);

    // routie('nijlpaard', function() {
    //   document.querySelector('#nijlpaard').classList.toggle('d-none');
    // });
  },
};
