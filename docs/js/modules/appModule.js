import { color } from './color.js';
import { router, routes } from './router.js';

export const appModule = {
  init: function() {
    color.changeAllSliderValues(); //remove this (and add to routes.colorChoosePage() (I think))
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', routes.overview); //change to router.handle()
    router.hashChange();
  },
};
