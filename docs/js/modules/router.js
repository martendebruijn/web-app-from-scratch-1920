import { render } from './render.js';
import { api } from './api.js';
import { color } from './color.js';

export const routes = {
  //app routes
  chooseColor: function() {
    render.chooseColor();
  },

  overview: function() {
    api.requestArtObjects().then(artObjects => {
      render.remove('wrapper');
      render.overview(artObjects);
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
  //app handler
  //todo: add chooseColorPage
  handle: function() {
    if (location.hash != '') {
      const id = location.hash;
      console.log('detail');
      const removeHash = id.split('#')[1]; //remove hash from id
      console.log(removeHash);
      routes.detail(removeHash);
    } else {
      // routes.overview();
      routes.chooseColor();
      color.changeAllSliderValues();
      console.log('choose color');
      const searchBtn = document.querySelector('#searchBtn');
      searchBtn.addEventListener('click', routes.overview);
    }
  },
  hashChange: function() {
    //listen to hashchange
    window.addEventListener('hashchange', function() {
      console.log(location.hash);
      console.log(this);
      router.handle(); //if there is a hashchange call router.handle()
    });
  },
};
