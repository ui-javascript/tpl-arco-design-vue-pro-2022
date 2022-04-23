<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.cardList']" />
    <ARow :gutter="20" align="stretch">
      <ACol :span="24">
        <ACard class="general-card" :title="$t('menu.list.cardList')">
          <ARow justify="space-between">
            <ACol :span="24">
              <ATabs :default-active-tab="1" type="rounded">
                <ATabPane key="1" :title="$t('cardList.tab.title.all')">
                  <QualityInspection />
                  <TheService />
                  <RulesPreset />
                </ATabPane>
                <ATabPane key="2" :title="$t('cardList.tab.title.content')">
                  <QualityInspection />
                </ATabPane>
                <ATabPane key="3" :title="$t('cardList.tab.title.service')">
                  <TheService />
                </ATabPane>
                <ATabPane key="4" :title="$t('cardList.tab.title.preset')">
                  <RulesPreset />
                </ATabPane>
              </ATabs>
            </ACol>
            <AInputSearch
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="position: absolute; top: 60px; right: 20px; width: 240px"
            />
          </ARow>
        </ACard>
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
  import QualityInspection from './components/quality-inspection.vue';
  import TheService from './components/the-service.vue';
  import RulesPreset from './components/reules-preset.vue';
</script>

<script lang="ts">
  export default {
    name: 'Card',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;

    :deep(.arco-list-content) {
      overflow-x: hidden;
    }

    :deep(.arco-card-meta-title) {
      font-size: 14px;
    }
  }

  :deep(.arco-list-col) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  :deep(.arco-list-item) {
    width: 33%;
  }

  :deep(.block-title) {
    margin: 0 0 12px 0;
    font-size: 14px;
  }

  :deep(.list-wrap) {
    // min-height: 140px;
    .list-row {
      align-items: stretch;

      .list-col {
        margin-bottom: 16px;
      }
    }

    :deep(.arco-space) {
      width: 100%;

      .arco-space-item {
        &:last-child {
          flex: 1;
        }
      }
    }
  }
</style>
