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
    render.backBtn();
    // backBtn.classList.toggle('d-none');
    //check if in local storage
    if (window.localStorage.length != 0) {
      console.log('ik heb al data');
      render.overview(data.getLocalStorage());
      // console.log(keys);
    } else {
      api.requestArtObjects().then(artObjects => {
        render.remove('wrapper');
        const overviewData = data.getOverview(artObjects);
        console.log(overviewData);
        data.addToLocalStorage(overviewData);
        render.overview(overviewData);
      });
    }
  },
  detail: function(id) {
    render.backBtn();
    render.remove('wrapper');
    api.requestDetail(id).then(object => {
      const detailData = data.filterDetail(object);
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
    const backBtn = document.querySelector('#backBtn');
    if (location.hash != '' && location.hash != '#search') {
      console.log(location.hash != '' && location.hash != '#search');

      const id = location.hash;
      console.log('detail');
      const removeHash = id.split('#')[1]; //remove hash from id
      console.log(removeHash);
      routes.detail(removeHash);
    } else if (location.hash === '#search') {
      console.log('overview');
      this.show(backBtn);
      routes.overview();
    } else {
      this.hide(backBtn);
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
      router.handle(); //if there is a hashchange call router.handle()
    });
  },
  goBack: function() {
    render.remove('wrapper');
    window.history.back();
  },
  show: function(el) {
    el.classList.remove('d-none');
  },
  hide: function(el) {
    el.classList.add('d-none');
  },
};
