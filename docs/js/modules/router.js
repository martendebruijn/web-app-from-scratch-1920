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
    api.requestDetail(id).then(object => {
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
      console.log(removeHash);
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
