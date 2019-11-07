// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'

import DefaultLayout from '~/layouts/Default.vue'

import './index.css';
import './admin.css';

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAVOq4C-rf7JVeHt6ws9vsf-KHIRpueASg',
    }
  });

  Vue.use(VueScrollTo, {
    duration: 1000,
    easing: 'ease-in-out',
  });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
