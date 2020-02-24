import { data } from './data.js';

export const render = {
  overview: function(item) {
    const id = document.querySelector('#wrapper');
    const items = data.filter(item);
    let i = 0;
    items.forEach(function(item) {
      id.insertAdjacentHTML(
        'afterbegin',
        `<a href="#${item.id}">${item.title}</a>`
      );
      i++;
    });
  },
  detail: function(id) {
    console.log('hallo ik ben de detail render met dit id: ' + id);
    render.remove();
    const wrapper = document.querySelector('#wrapper');
    // wrapper.insertAdjacentHTML('afterbegin', `<p> </p>`)
    console.log(id);
  },
  remove: function() {
    document.querySelector('#wrapper').innerHTML = '';
  },
};
