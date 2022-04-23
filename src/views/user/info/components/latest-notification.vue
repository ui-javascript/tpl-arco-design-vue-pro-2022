<template>
  <ACard class="general-card" :title="$t('userInfo.title.latestNotification')">
    <ASkeleton v-if="loading" :animation="true">
      <ASkeletonLine :rows="3" />
    </ASkeleton>
    <AResult v-else status="404">
      <template #subtitle>
        {{ $t('userInfo.nodata') }}
      </template>
    </AResult>
  </ACard>
</template>

<script lang="ts" setup>
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);
</script>

<style lang="less" scoped>
  :deep(.arco-result) {
    padding: 40px 32px 108px;
  }
</style>
