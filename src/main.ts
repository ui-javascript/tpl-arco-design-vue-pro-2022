import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import formCreate from '@form-create/arco-design';
import globalComponents from '@/components';
import App from './App.vue';

import directive from './directive';
import i18n from './locale';
import router from './router';
import store from './store';
import '@/utils/interceptor';
import './utils/mock';

import '@/assets/style/global.less';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(formCreate);

app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
