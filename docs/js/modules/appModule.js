import { color } from './color.js';
import { router, routes } from './router.js';

export const appModule = {
  init: function() {
    color.fullValue();
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', routes.overview);
    router.hashChange();
  },
};
