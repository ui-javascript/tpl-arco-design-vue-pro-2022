import Mock from 'mockjs';

const modules = import.meta.globEager('../{views,components}/**/*mock.ts');
Object.keys(modules);

Mock.setup({
  timeout: '50-200',
});
