import { router } from './router.js';
import { render } from './render.js';

export const appModule = {
  init: function() {
    // render.loader();
    router.handle();
    router.hashChange();
  },
};
