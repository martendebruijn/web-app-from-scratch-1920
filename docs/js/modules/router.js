import { render } from './render.js';
import { api } from './api.js';

export const routes = {
  overview: function() {
    render.remove('wrapper');
    api.requestPaintings().then(paintings => {
      render.overview(paintings);
    });
  },
  detail: function() {
    render.remove('wrapper');
    api.requestDetail().then(object => {
      render.detail(object);
    });
  },
};

export const router = {
  handle: function() {
    if (location.hash != '') {
      const id = location.hash;
      console.log('detail');
      const removeHash = id.split('#')[1]; //remove hash from id
      routes.detail(removeHash);
    } else {
      routes.overview();
      console.log('meh');
    }
  },
  hashChange: function() {
    window.addEventListener('hashchange', function() {
      console.log(location.hash);
      router.handle();
    });
  },
};
