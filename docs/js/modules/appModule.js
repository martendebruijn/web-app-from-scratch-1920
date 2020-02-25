import { router } from './router.js';

export const appModule = {
  init: function() {
    router.handle();
    router.hashChange();
  },
};
