import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import VueResource from 'vue-resource';

import './common/stylus/index.styl';

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	// components: {App} vue 1.0写法
	render: h => h(App) // vue 2.0写法
});
