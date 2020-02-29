import { render } from './render.js';
import { api } from './api.js';
import { color } from './color.js';
import { data } from './data.js';

const routes = {
  //app routes
  chooseColor: function() {
    data.clearStorage();
    router.hide('loader');
    render.chooseColor();
  },
  overview: function() {
    render.backBtn();
    data.checkLocalStorage();
  },
  detail: function(id) {
    render.backBtn();
    render.remove('wrapper');
    api.requestDetail(id).then(object => {
      const detailData = data.filterDetail(object);
      router.hide('loader');
      render.detail(detailData);
    });
    const backBtn = document.querySelector('#backBtn');
    backBtn.addEventListener('click', router.goBack);
  },
};

export const router = {
  //app handler
  handle: function() {
    if (location.hash != '' && location.hash != '#search') {
      this.show('backBtn');
      this.hide('title');
      const id = location.hash;
      const removeHash = id.split('#')[1]; //remove hash from id zodat dit id gebruikt kan worden in de api call
      routes.detail(removeHash);
    } else if (location.hash === '#search') {
      this.show('title');
      this.show('backBtn');
      routes.overview();
    } else {
      this.hide('backBtn');
      this.show('title');
      routes.chooseColor();
      color.changeAllSliderValues();
    }
  },

  hashChange: function() {
    //listen to hashchange
    window.addEventListener('hashchange', function() {
      router.show('loader');
      router.handle(); //if there is a hashchange call router.handle()
    });
  },
  goBack: function() {
    render.remove('wrapper'); //go back a page
    window.history.back();
  },
  show: function(el) {
    const id = document.getElementById(el);
    id.classList.remove('d-none');
  },
  hide: function(el) {
    const id = document.getElementById(el);
    id.classList.add('d-none');
  },
};
