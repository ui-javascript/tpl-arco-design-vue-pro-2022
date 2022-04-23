<template>
  <ABreadcrumb class="container-breadcrumb">
    <ABreadcrumbItem>
      <icon-apps />
    </ABreadcrumbItem>
    <ABreadcrumbItem v-for="item in items" :key="item">
      {{ $t(item) }}
    </ABreadcrumbItem>
  </ABreadcrumb>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';

  defineProps({
    items: {
      type: Array as PropType<string[]>,
      default() {
        return [];
      },
    },
  });
</script>

<style scoped lang="less">
  .container-breadcrumb {
    margin: 16px 0;

    :deep(.arco-breadcrumb-item) {
      color: rgb(var(--gray-6));

      &:last-child {
        color: rgb(var(--gray-8));
      }
    }
  }
</style>
