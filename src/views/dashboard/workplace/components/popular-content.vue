<template>
  <ASpin :loading="loading" style="width: 100%">
    <ACard
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>
        {{ $t('workplace.popularContent') }}
      </template>
      <template #extra>
        <ALink>{{ $t('workplace.viewMore') }}</ALink>
      </template>
      <ASpace direction="vertical" :size="10" fill>
        <ARadioGroup
          v-model:model-value="type"
          type="button"
          @change="typeChange"
        >
          <ARadio value="text">
            {{ $t('workplace.popularContent.text') }}
          </ARadio>
          <ARadio value="image">
            {{ $t('workplace.popularContent.image') }}
          </ARadio>
          <ARadio value="video">
            {{ $t('workplace.popularContent.video') }}
          </ARadio>
        </ARadioGroup>
        <ATable
          :data="renderList"
          :pagination="false"
          :bordered="false"
          :scroll="{ x: '100%', y: '264px' }"
        >
          <template #columns>
            <ATableColumn title="排名" data-index="key"></ATableColumn>
            <ATableColumn title="内容标题" data-index="title">
              <template #cell="{ record }">
                <ATypographyParagraph
                  :ellipsis="{
                    rows: 1,
                  }"
                >
                  {{ record.title }}
                </ATypographyParagraph>
              </template>
            </ATableColumn>
            <ATableColumn title="点击量" data-index="clickNumber">
            </ATableColumn>
            <ATableColumn
              title="日涨幅"
              data-index="increases"
              :sortable="{
                sortDirections: ['ascend', 'descend'],
              }"
            >
              <template #cell="{ record }">
                <div class="increases-cell">
                  <span>{{ record.increases }}%</span>
                  <icon-caret-up
                    v-if="record.increases !== 0"
                    style="color: #f53f3f; font-size: 8px"
                  />
                </div>
              </template>
            </ATableColumn>
          </template>
        </ATable>
      </ASpace>
    </ACard>
  </ASpin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import {
    queryPopularList,
    PopularRecord,
  } from '@/views/dashboard/dashboard.api';

  const type = ref('text');
  const { loading, setLoading } = useLoading();
  const renderList = ref<PopularRecord[]>();
  const fetchData = async (contentType: string) => {
    try {
      setLoading(true);
      const { data } = await queryPopularList({ type: contentType });
      renderList.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const typeChange = (contentType: string) => {
    fetchData(contentType);
  };
  fetchData('text');
</script>

<style scoped lang="less">
  .general-card {
    min-height: 388px;
  }

  :deep(.arco-table-tr) {
    height: 44px;

    .arco-typography {
      margin-bottom: 0;
    }
  }

  .increases-cell {
    display: flex;
    align-items: center;

    span {
      margin-right: 4px;
    }
  }
</style>
