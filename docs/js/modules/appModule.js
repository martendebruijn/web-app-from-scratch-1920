import { color } from './color.js';
import { router, routes } from './router.js';

export const appModule = {
  init: function() {
    router.handle();
    router.hashChange();
  },
};
