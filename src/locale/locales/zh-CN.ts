const locale = {};
const modules = import.meta.globEager(
  '../../{views,components}/**/locale/zh-CN.ts'
);

Object.keys(modules).forEach((key) => {
  Object.assign(locale, modules[key].default);
});

export default {
  'menu.dashboard': '仪表盘',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',

  'settings.title': '页面配置',
  'settings.themeColor': '主题色',
  'settings.content': '内容区域',
  'settings.search': '搜索',
  'settings.language': '语言',
  'settings.navbar': '导航栏',
  'settings.menuWidth': '菜单宽度 (px)',
  'settings.navbar.theme.toLight': '点击切换为亮色模式',
  'settings.navbar.theme.toDark': '点击切换为暗黑模式',
  'settings.navbar.alerts': '消息通知',
  'settings.menu': '菜单栏',
  'settings.tabBar': '多页签',
  'settings.footer': '底部',
  'settings.otherSettings': '其他设置',
  'settings.colorWeek': '色弱模式',
  'settings.alertContent':
    '配置之后仅是临时生效，要想真正作用于项目，点击下方的 "复制配置" 按钮，将配置替换到 settings.json 中即可。',
  'settings.copySettings': '复制配置',
  'settings.copySettings.message':
    '复制成功，请粘贴到 src/settings.json 文件中',
  'settings.close': '关闭',
  'settings.color.tooltip':
    '根据主题颜色生成的 10 个梯度色（将配置复制到项目中，主题色才能对亮色 / 暗黑模式同时生效）',

  ...locale,
};
