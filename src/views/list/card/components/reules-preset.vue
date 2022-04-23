<template>
  <div class="list-wrap">
    <ATypographyTitle class="block-title" :heading="6">
      {{ $t('cardList.tab.title.preset') }}
    </ATypographyTitle>
    <ARow class="list-row" :gutter="24">
      <ACol
        v-for="item in renderData"
        :key="item.id"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
        class="list-col"
        style="min-height: 140px"
      >
        <CardWrap
          :loading="loading"
          :title="item.title"
          :description="item.description"
          :default-value="item.enable"
          :action-type="item.actionType"
          :tag-text="$t('cardList.preset.tag')"
        >
          <template #skeleton>
            <ASkeleton :animation="true">
              <ASkeletonLine :widths="['100%', '40%']" :rows="2" />
              <ASkeletonLine :widths="['40%']" :rows="1" />
            </ASkeleton>
          </template>
        </CardWrap>
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
  import { queryRulesPresetList, ServiceRecord } from '@/views/list/list.api';
  import useRequest from '@/hooks/request';
  import CardWrap from './card-wrap.vue';

  const defaultValue: ServiceRecord[] = new Array(6).fill({});
  const { loading, response: renderData } = useRequest<ServiceRecord[]>(
    queryRulesPresetList,
    defaultValue
  );
</script>

<style scoped lang="less"></style>
