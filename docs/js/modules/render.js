import { data } from './data.js';

export const render = {
  overview: function(item) {
    const id = document.querySelector('#wrapper');
    const items = data.filterOverview(item);
    let i = 0;
    items.forEach(function(item) {
      id.insertAdjacentHTML(
        'afterbegin',
        `<a href="#${item.id}">${item.title}</a>`
      );
      i++;
    });
  },
  detail: function(item) {
    console.log('hallo ik ben de detail render met dit id: ' + item);
    render.remove();
    const cleanData = data.filterDetail(item);
    const wrapper = document.querySelector('#wrapper');
    const painting = cleanData[0];
    wrapper.insertAdjacentHTML(
      'afterbegin',
      '<p>' + painting.title + '</p>' + `<img src="${painting.imgUrl}" alt="#">`
    );
  },
  remove: function() {
    document.querySelector('#wrapper').innerHTML = '';
  },
};
