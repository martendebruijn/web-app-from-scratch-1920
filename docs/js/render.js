import { data } from './data.js';

export const render = {
  none: function() {
    const id = document.querySelector('#wrapper');
    const render = 'Geen schilderijen gevonden bij de ingevoerde kleur';
    id.insertAdjacentText('afterbegin', render);
  },
  schilderijen: function(item) {
    const id = document.querySelector('#wrapper');
    const items = data.filter(item);
    items.forEach(item =>
      id.insertAdjacentHTML('afterbegin', `${item.title} <br>`)
    );
  },
  remove: function(id) {
    document.getElementById(id).innerHTML = '';
  },
};
