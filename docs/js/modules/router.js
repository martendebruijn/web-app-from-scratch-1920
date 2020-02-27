import { render } from './render.js';
import { api } from './api.js';
import { color } from './color.js';
import { data } from './data.js';

const routes = {
  //app routes
  chooseColor: function() {
    // render.remove('loader');
    console.log('ls is cleared');
    data.clearStorage();
    router.hide('loader');
    render.chooseColor();
  },
  overview: function() {
    console.log(location.hash);
    render.backBtn();

    data.checkLocalStorage();
    // backBtn.classList.toggle('d-none');
    //check if in local storage
    //make this in an checkLocalStorage() function
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
      // render.loader();

      console.log('overview');
      this.show('backBtn');
      routes.overview();
    } else {
      // render.loader();
      this.hide('backBtn');
      routes.chooseColor();
      color.changeAllSliderValues();
      console.log('choose color');
    }
  },

  hashChange: function() {
    //listen to hashchange
    window.addEventListener('hashchange', function() {
      console.log(location.hash);
      console.log(this);
      router.show('loader');
      router.handle(); //if there is a hashchange call router.handle()
    });
  },
  goBack: function() {
    render.remove('wrapper');
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
