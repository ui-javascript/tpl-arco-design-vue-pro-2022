import Mock from 'mockjs';

const modules = import.meta.glob('../{views,components}/**/*mock.ts');
Object.keys(modules).forEach((key) => {
  modules[key]();
});

Mock.setup({
  timeout: '50-200',
});
