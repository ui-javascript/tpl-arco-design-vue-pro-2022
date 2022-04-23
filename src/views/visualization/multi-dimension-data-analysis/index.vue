<template>
  <div class="container">
    <Breadcrumb
      :items="[
        'menu.visualization',
        'menu.visualization.multiDimensionDataAnalysis',
      ]"
    />
    <ASpace direction="vertical" :size="16" fill>
      <AGrid :cols="24" :col-gap="16" :row-gap="16">
        <AGridItem :span="{ xs: 24, sm: 24, md: 24, lg: 18, xl: 18, xxl: 18 }">
          <DataOverview />
        </AGridItem>
        <AGridItem :span="{ xs: 24, sm: 24, md: 24, lg: 6, xl: 6, xxl: 6 }">
          <UserActions style="margin-bottom: 16px" />
          <ContentTypeDistribution />
        </AGridItem>
      </AGrid>
      <DataChainGrowth />
      <ContentPublishingSource />
    </ASpace>
  </div>
</template>

<script lang="ts" setup>
  import DataOverview from './components/data-overview.vue';
  import DataChainGrowth from './components/data-chain-growth.vue';
  import UserActions from './components/user-actions.vue';
  import ContentTypeDistribution from './components/content-type-distribution.vue';
  import ContentPublishingSource from './components/content-publishing-source.vue';
</script>

<script lang="ts">
  export default {
    name: 'MultiDimensionDataAnalysis',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  :deep(.section-titile) {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 16px;
  }

  :deep(.chart-wrap) {
    height: 264px;
  }
</style>
