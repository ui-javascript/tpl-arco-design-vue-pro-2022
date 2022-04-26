# README

arco design pro vue 模板改造

# 框架

- https://vxetable.cn/
- http://www.form-create.com/

# 插件

- vscode-easycode

---

# 参考 @ref

- 神器unplugin-vue-components @nice
    - https://www.csdn.net/tags/MtTaEgxsNTI1MTgzLWJsb2cO0O0O.html
    - https://juejin.cn/post/7012446423367024676

```
@todo 还是存在eslint标红, 但是不影响运行

===
vue-global-api -- 解决eslint报错
npm install vue-global-api -D --legacy-peer-deps

禁用vetur改用volar

===
// .eslintrc.js
module.exports = {
  extends: [
    // collections
    'vue-global-api/reactivity',
    'vue-global-api/lifecycle',
    'vue-global-api/component',
    // single apis
    'vue-global-api/ref',
    'vue-global-api/toRef',
  ]
};
```

- 组件正则替换命名

```
<a-(\w+)-(\w+)-(\w+)
<A\u$1\u$2\u$3

<a-(\w+)-(\w+)
<A\u$1\u$2

<a-(\w+)
<A\u$1

<\a-(\w+)-(\w+)-(\w+)
<\A\u$1\u$2\u$3

<\a-(\w+)-(\w+)
<\A\u$1\u$2

<\a-(\w+)
<\A\u$1

===
@ps Breadcrumb重名了, 改为CustomBreadcurmb
```