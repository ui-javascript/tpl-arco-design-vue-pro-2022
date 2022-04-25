<template>
  <div class="container">
    <Breadcrumb :items="['menu.User', 'menu.User.page']" />

    <div class="content"> 页面 User </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'User',
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
