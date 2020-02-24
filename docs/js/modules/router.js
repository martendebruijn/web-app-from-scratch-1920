import { render } from './render.js';
import { api } from './api.js';

export const routes = {
  overview: function() {
    api.requestPaintings().then(paintings => {
      render.remove('wrapper');
      render.overview(paintings);
    });
  },
  detail: function(id) {
    render.remove('wrapper');

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
