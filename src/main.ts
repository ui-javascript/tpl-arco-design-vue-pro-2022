import { createApp } from 'vue';

// acro-design-vue
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

// form-create
import formCreate from '@form-create/arco-design';

// vxe-table
import XEUtils from 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import zhCN from 'vxe-table/es/locale/lang/zh-CN';

// 项目
import globalComponents from '@/components';
import directive from './directive';
import i18n from './locale';
import router from './router';
import store from './store';
import '@/utils/interceptor';
import './utils/mock';

import '@/assets/style/global.less';
import '@arco-design/web-vue/dist/arco.css';

import App from './App.vue';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(formCreate);

VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args),
});
app.use(VXETable);

app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
