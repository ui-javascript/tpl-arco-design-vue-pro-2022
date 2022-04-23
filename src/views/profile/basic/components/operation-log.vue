<template>
  <ACard class="general-card">
    <template #title>
      {{ $t('basicProfile.title.operationLog') }}
    </template>
    <ASpin :loading="loading" style="width: 100%">
      <ATable :data="renderData">
        <template #columns>
          <ATableColumn
            :title="$t('basicProfile.column.contentNumber')"
            data-index="contentNumber"
          />
          <ATableColumn
            :title="$t('basicProfile.column.updateContent')"
            data-index="updateContent"
          />
          <ATableColumn
            :title="$t('basicProfile.column.status')"
            data-index="status"
          >
            <template #cell="{ record }">
              <p v-if="record.status === 0">
                <span class="circle"></span>
                <span>{{ $t('basicProfile.cell.auditing') }}</span>
              </p>
              <p v-if="record.status === 1">
                <span class="circle pass"></span>
                <span>{{ $t('basicProfile.cell.pass') }}</span>
              </p>
            </template>
          </ATableColumn>
          <ATableColumn
            :title="$t('basicProfile.column.updateTime')"
            data-index="updateTime"
          />
          <ATableColumn :title="$t('basicProfile.column.operation')">
            <template #cell>
              <AButton type="text">{{ $t('basicProfile.cell.view') }}</AButton>
            </template>
          </ATableColumn>
        </template>
      </ATable>
    </ASpin>
  </ACard>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    queryOperationLog,
    operationLogRes,
  } from '@/views/profile/profile.api';
  import useLoading from '@/hooks/loading';

  const { loading, setLoading } = useLoading(true);
  const renderData = ref<operationLogRes>([]);
  const fetchData = async () => {
    try {
      const { data } = await queryOperationLog();
      renderData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
</style>
