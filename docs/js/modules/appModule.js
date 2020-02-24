import { color } from './color.js';
import { api } from './api.js';
import { router } from './router.js';

export const appModule = {
  init: function() {
    color.fullValue();
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', api.requestPaintings);
    router.hashChange();
  },
};
