<template>
  <div class="container">
    <Breadcrumb :items="['menu.ZhihuFriend', 'menu.ZhihuFriend.page']" />

    <div class="content">
      <form-create
        v-model="value"
        v-model:api="fApi"
        :rule="rule"
        :option="option"
      ></form-create>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { fApi, value, option, rule } from './ZhihuFriend.page.schema';
</script>

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
      padding: 30px 20px 20px 20px;
      background-color: #fff;
    }
  }
</style>
