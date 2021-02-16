import Vue from 'vue';
import VuePlyr from 'vue-plyr';
import 'plyr/dist/plyr.css';

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false },
  },
});

// Vue.component('VuePlyr', VuePlyr);
