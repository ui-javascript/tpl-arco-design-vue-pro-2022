<template>
  <ASpin :loading="loading" style="width: 100%">
    <ACard class="general-card" :header-style="{ paddingBottom: '14px' }">
      <template #title>
        {{ $t('dataAnalysis.popularAuthor') }}
      </template>
      <template #extra>
        <ALink>{{ $t('workplace.viewMore') }}</ALink>
      </template>
      <ATable
        :data="tableData.list"
        :pagination="false"
        :bordered="false"
        style="margin-bottom: 20px"
        :scroll="{ x: '100%', y: '350px' }"
      >
        <template #columns>
          <ATableColumn
            :title="$t('dataAnalysis.popularAuthor.column.ranking')"
            data-index="ranking"
          >
          </ATableColumn>
          <ATableColumn
            :title="$t('dataAnalysis.popularAuthor.column.author')"
            data-index="author"
          >
          </ATableColumn>
          <ATableColumn
            :title="$t('dataAnalysis.popularAuthor.column.content')"
            data-index="contentCount"
            :sortable="{
              sortDirections: ['ascend', 'descend'],
            }"
          >
          </ATableColumn>
          <ATableColumn
            :title="$t('dataAnalysis.popularAuthor.column.click')"
            data-index="clickCount"
            :sortable="{
              sortDirections: ['ascend', 'descend'],
            }"
          >
          </ATableColumn>
        </template>
      </ATable>
    </ACard>
  </ASpin>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import {
    queryPopularAuthor,
    PopularAuthorRes,
  } from '@/views/visualization/visualization.api';

  const { loading, setLoading } = useLoading();
  const tableData = ref<PopularAuthorRes>({ list: [] });
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await queryPopularAuthor();
      tableData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  .general-card {
    max-height: 425px;
  }
</style>
