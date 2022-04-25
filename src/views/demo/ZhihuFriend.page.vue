<template>
  <div class="container">
    <Breadcrumb :items="['menu.ZhihuFriend', 'menu.ZhihuFriend.page']" />

    <div class="content"> 页面 ZhihuFriend </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'ZhihuFriend',
  };
</script>

<style scoped lang="less">
  .container {
    height: calc(100% - 40px);
    padding: 0 20px 20px 20px;

    .content {
    }
  }
</style>
