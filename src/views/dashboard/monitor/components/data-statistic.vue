<template>
  <ACard :bordered="false" :body-style="{ padding: '20px' }">
    <ATabs default-active-tab="liveMethod">
      <ATabPane key="liveMethod" :title="$t('monitor.tab.title.liveMethod')" />
      <ATabPane
        key="onlinePopulation"
        :title="$t('monitor.tab.title.onlinePopulation')"
      />
    </ATabs>
    <div class="data-statistic-content">
      <ARadioGroup :default-value="3" type="button">
        <ARadio :value="1">{{ $t('monitor.liveMethod.normal') }}</ARadio>
        <ARadio :value="2">{{ $t('monitor.liveMethod.flowControl') }}</ARadio>
        <ARadio :value="3">{{ $t('monitor.liveMethod.video') }}</ARadio>
        <ARadio :value="4">{{ $t('monitor.liveMethod.web') }}</ARadio>
      </ARadioGroup>

      <div class="data-statistic-list-wrapper">
        <div class="data-statistic-list-header">
          <AButton type="text">{{ $t('monitor.editCarousel') }}</AButton>
          <AButton disabled>{{ $t('monitor.startCarousel') }}</AButton>
        </div>
        <div class="data-statistic-list-content">
          <DataStatisticList />
        </div>
      </div>
    </div>
  </ACard>
</template>

<script lang="ts" setup>
  import DataStatisticList from './data-statistic-list.vue';
</script>

<style scoped lang="less">
  .data-statistic {
    &-content {
      padding: 20px 0;
    }

    &-list {
      &-header {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }

      &-content {
        margin-top: 16px;
      }
    }
  }
</style>
