# README

arco design pro vue 模板改造

# 插件

- vscode-easycode

---

# 参考 @ref

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