import { render } from './render.js';

export const routes = {
  overview: function() {
    console.log('Routes: chooseColor');
    // render.chooseColor();
  },
  detail: function(id) {
    const blockElements = document.querySelectorAll('.d-block');
    blockElements.forEach(function(el) {
      el.classList.toggle('d-block');
      el.classList.toggle('d-none');
    });
    // const el = document.querySelector(id);
    // el.classList.toggle('d-none');
    // el.classList.toggle('d-block');
    console.log('ik laad ' + id);
    render.detail(id);
  },
};

export const router = {
  handle: function() {
    if (location.hash != '') {
      const id = location.hash;
      routes.detail(id);
    } else {
      routes.overview();
    }
  },
  hashChange: function() {
    window.addEventListener('hashchange', function() {
      console.log(location.hash);
      router.handle();
    });
  },
};
