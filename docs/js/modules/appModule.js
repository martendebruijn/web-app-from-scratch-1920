import { color } from './color.js';
import { api } from './api.js';
import { router, routes } from './router.js';
import { render } from './render.js';

export const appModule = {
  init: function() {
    color.fullValue();
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', routes.overview);
    router.hashChange();
  },
};
