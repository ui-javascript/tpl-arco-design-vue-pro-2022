<template>
  <div class="list-wrap">
    <ATypographyTitle class="block-title" :heading="6">
      {{ $t('cardList.tab.title.content') }}
    </ATypographyTitle>
    <ARow class="list-row" :gutter="24">
      <ACol
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
        class="list-col"
      >
        <div class="card-wrap empty-wrap">
          <ACard :bordered="false" hoverable>
            <AResult :status="null" :title="$t('cardList.content.action')">
              <template #icon>
                <icon-plus style="font-size: 20px" />
              </template>
            </AResult>
          </ACard>
        </div>
      </ACol>
      <ACol
        v-for="item in renderData"
        :key="item.id"
        class="list-col"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        :xxl="6"
      >
        <CardWrap
          :loading="loading"
          :title="item.title"
          :description="item.description"
          :default-value="item.enable"
          :action-type="item.actionType"
          :icon="item.icon"
          :open-txt="$t('cardList.content.inspection')"
          :close-txt="$t('cardList.content.delete')"
          :show-tag="false"
        >
          <ADescriptions
            style="margin-top: 16px"
            :data="item.data"
            layout="inline-horizontal"
            :column="2"
          />
          <template #skeleton>
            <ASkeleton :animation="true">
              <ASkeletonLine
                :widths="['50%', '50%', '100%', '40%']"
                :rows="4"
              />
              <ASkeletonLine :widths="['40%']" :rows="1" />
            </ASkeleton>
          </template>
        </CardWrap>
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
  import { queryInspectionList, ServiceRecord } from '@/views/list/list.api';
  import useRequest from '@/hooks/request';
  import CardWrap from './card-wrap.vue';

  const defaultValue: ServiceRecord[] = new Array(3).fill({});
  const { loading, response: renderData } = useRequest<ServiceRecord[]>(
    queryInspectionList,
    defaultValue
  );
</script>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    border: 1px solid var(--color-neutral-3);
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    :deep(.arco-card-meta-description) {
      color: rgb(var(--gray-6));

      .arco-descriptions-item-label-inline {
        color: rgb(var(--gray-6));
        font-weight: normal;
        font-size: 12px;
      }

      .arco-descriptions-item-value-inline {
        color: rgb(var(--gray-8));
      }
    }
  }

  .empty-wrap {
    height: 200px;
    border-radius: 4px;

    :deep(.arco-card) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-radius: 4px;

      .arco-result-title {
        color: rgb(var(--gray-6));
      }
    }
  }
</style>
