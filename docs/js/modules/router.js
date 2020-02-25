import { render } from './render.js';
import { api } from './api.js';
import { color } from './color.js';
import { data } from './data.js';

export const routes = {
  //app routes
  chooseColor: function() {
    console.log('ls is cleared');
    data.clearStorage();
    render.chooseColor();
  },

  overview: function() {
    console.log(location.hash);
    //check if in local storage
    if (window.localStorage.length != 0) {
      console.log('ik heb al data');
      //load local storage
    } else {
      api.requestArtObjects().then(artObjects => {
        render.remove('wrapper');
        render.overview(artObjects);
      });
    }
    const backBtn = document.querySelector('#backBtn');
    backBtn.addEventListener('click', router.goBack);
  },
  detail: function(id) {
    render.remove('wrapper');
    api.requestDetail(id).then(object => {
      render.detail(object);
    });
    const backBtn = document.querySelector('#backBtn');
    backBtn.addEventListener('click', router.goBack);
  },
};

export const router = {
  //app handler
  //todo: add chooseColorPage
  handle: function() {
    if (location.hash != '' && location.hash != '#search') {
      console.log(location.hash != '' && location.hash != '#search');

      const id = location.hash;
      console.log('detail');
      const removeHash = id.split('#')[1]; //remove hash from id
      console.log(removeHash);
      routes.detail(removeHash);
    } else if (location.hash === '#search') {
      console.log('overview');
      routes.overview();
    } else {
      routes.chooseColor();
      color.changeAllSliderValues();
      console.log('choose color');
      const searchBtn = document.querySelector('#searchBtn');
      searchBtn.addEventListener('click', routes.handle);
    }
    // routes.overview();
  },

  hashChange: function() {
    //listen to hashchange
    window.addEventListener('hashchange', function() {
      console.log(location.hash);
      console.log(this);
      router.handle(); //if there is a hashchange call router.handle()
    });
  },
  goBack: function() {
    render.remove('wrapper');
    window.history.back();
  },
};
