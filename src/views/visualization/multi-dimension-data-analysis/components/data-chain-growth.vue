<template>
  <div>
    <ARow :gutter="16">
      <ACol :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.retentionTrends')"
          quota="retentionTrends"
          chart-type="line"
        />
      </ACol>
      <ACol :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.userRetention')"
          quota="userRetention"
          chart-type="bar"
        />
      </ACol>
      <ACol :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.contentConsumptionTrends')"
          quota="contentConsumptionTrends"
          chart-type="line"
        />
      </ACol>
      <ACol :span="6">
        <ChainItem
          :title="$t('multiDAnalysis.card.title.contentConsumption')"
          quota="contentConsumption"
          chart-type="bar"
        />
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
  import ChainItem from './chain-item.vue';
</script>
