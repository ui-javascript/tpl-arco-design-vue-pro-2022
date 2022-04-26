<template>
  <div class="container">
    <Breadcrumb :items="['menu.ZhihuFriend', 'menu.ZhihuFriend.page']" />

    <ACard class="general-card" :title="$t('menu.ZhihuFriend.page')">
      <form-create
        v-model="value"
        v-model:api="fApi"
        :rule="rule"
        :option="option"
      ></form-create>
    </ACard>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { fApi, value, option, rule } from './ZhihuFriend.page.schema';

  import pageZhihuFriend from './ZhihuFriend.api';

  onMounted(async () => {
    const res = await pageZhihuFriend({});
    console.log(res);
  });
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
  }
</style>
