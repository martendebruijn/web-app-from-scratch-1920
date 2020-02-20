import { color } from './color.js';
import { api } from './api.js';

export const appModule = {
  init: function() {
    color.fullValue();
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', api.requestPaintings);
  },
};
