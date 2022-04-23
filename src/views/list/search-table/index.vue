<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <ACard class="general-card" :title="$t('menu.list.searchTable')">
      <ARow>
        <ACol :flex="1">
          <AForm
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <ARow :gutter="16">
              <ACol :span="8">
                <AFormItem
                  field="number"
                  :label="$t('searchTable.form.number')"
                >
                  <AInput
                    v-model="formModel.number"
                    :placeholder="$t('searchTable.form.number.placeholder')"
                  />
                </AFormItem>
              </ACol>
              <ACol :span="8">
                <AFormItem field="name" :label="$t('searchTable.form.name')">
                  <AInput
                    v-model="formModel.name"
                    :placeholder="$t('searchTable.form.name.placeholder')"
                  />
                </AFormItem>
              </ACol>
              <ACol :span="8">
                <AFormItem
                  field="contentType"
                  :label="$t('searchTable.form.contentType')"
                >
                  <ASelect
                    v-model="formModel.contentType"
                    :options="contentTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </AFormItem>
              </ACol>
              <ACol :span="8">
                <AFormItem
                  field="filterType"
                  :label="$t('searchTable.form.filterType')"
                >
                  <ASelect
                    v-model="formModel.filterType"
                    :options="filterTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </AFormItem>
              </ACol>
              <ACol :span="8">
                <AFormItem
                  field="createdTime"
                  :label="$t('searchTable.form.createdTime')"
                >
                  <ARangePicker
                    v-model="formModel.createdTime"
                    style="width: 100%"
                  />
                </AFormItem>
              </ACol>
              <ACol :span="8">
                <AFormItem
                  field="status"
                  :label="$t('searchTable.form.status')"
                >
                  <ASelect
                    v-model="formModel.status"
                    :options="statusOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </AFormItem>
              </ACol>
            </ARow>
          </AForm>
        </ACol>
        <ADivider style="height: 84px" direction="vertical" />
        <ACol :flex="'86px'" style="text-align: right">
          <ASpace direction="vertical" :size="18">
            <AButton type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </AButton>
            <AButton @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </AButton>
          </ASpace>
        </ACol>
      </ARow>
      <ADivider style="margin-top: 0" />
      <ARow style="margin-bottom: 16px">
        <ACol :span="16">
          <ASpace>
            <AButton type="primary">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('searchTable.operation.create') }}
            </AButton>
            <AUpload action="/">
              <template #upload-button>
                <AButton>
                  {{ $t('searchTable.operation.import') }}
                </AButton>
              </template>
            </AUpload>
          </ASpace>
        </ACol>
        <ACol :span="8" style="text-align: right">
          <AButton>
            <template #icon>
              <icon-download />
            </template>
            {{ $t('searchTable.operation.download') }}
          </AButton>
        </ACol>
      </ARow>
      <ATable
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="renderData"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #columns>
          <ATableColumn
            :title="$t('searchTable.columns.number')"
            data-index="number"
          />
          <ATableColumn
            :title="$t('searchTable.columns.name')"
            data-index="name"
          />
          <ATableColumn
            :title="$t('searchTable.columns.contentType')"
            data-index="contentType"
          >
            <template #cell="{ record }">
              <ASpace>
                <AAvatar
                  v-if="record.contentType === 'img'"
                  :size="16"
                  shape="square"
                >
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"
                  />
                </AAvatar>
                <AAvatar
                  v-else-if="record.contentType === 'horizontalVideo'"
                  :size="16"
                  shape="square"
                >
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"
                  />
                </AAvatar>
                <AAvatar v-else :size="16" shape="square">
                  <img
                    alt="avatar"
                    src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"
                  />
                </AAvatar>
                {{ $t(`searchTable.form.contentType.${record.contentType}`) }}
              </ASpace>
            </template>
          </ATableColumn>
          <ATableColumn
            :title="$t('searchTable.columns.filterType')"
            data-index="filterType"
          >
            <template #cell="{ record }">
              {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
            </template>
          </ATableColumn>
          <ATableColumn
            :title="$t('searchTable.columns.count')"
            data-index="count"
          />
          <ATableColumn
            :title="$t('searchTable.columns.createdTime')"
            data-index="createdTime"
          />
          <ATableColumn
            :title="$t('searchTable.columns.status')"
            data-index="status"
          >
            <template #cell="{ record }">
              <span v-if="record.status === 'offline'" class="circle"></span>
              <span v-else class="circle pass"></span>
              {{ $t(`searchTable.form.status.${record.status}`) }}
            </template>
          </ATableColumn>
          <ATableColumn
            :title="$t('searchTable.columns.operations')"
            data-index="operations"
          >
            <template #cell>
              <AButton v-permission="['admin']" type="text" size="small">
                {{ $t('searchTable.columns.operations.view') }}
              </AButton>
            </template>
          </ATableColumn>
        </template>
      </ATable>
    </ACard>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import {
    queryPolicyList,
    PolicyRecord,
    PolicyParams,
  } from '@/views/list/list.api';
  import { Pagination, Options } from '@/types/global';

  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formModel = ref(generateFormModel());
  const basePagination: Pagination = {
    current: 1,
    pageSize: 20,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const contentTypeOptions = computed<Options[]>(() => [
    {
      label: t('searchTable.form.contentType.img'),
      value: 'img',
    },
    {
      label: t('searchTable.form.contentType.horizontalVideo'),
      value: 'horizontalVideo',
    },
    {
      label: t('searchTable.form.contentType.verticalVideo'),
      value: 'verticalVideo',
    },
  ]);
  const filterTypeOptions = computed<Options[]>(() => [
    {
      label: t('searchTable.form.filterType.artificial'),
      value: 'artificial',
    },
    {
      label: t('searchTable.form.filterType.rules'),
      value: 'rules',
    },
  ]);
  const statusOptions = computed<Options[]>(() => [
    {
      label: t('searchTable.form.status.online'),
      value: 'online',
    },
    {
      label: t('searchTable.form.status.offline'),
      value: 'offline',
    },
  ]);
  const fetchData = async (
    params: PolicyParams = { current: 1, pageSize: 20 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryPolicyList(params);
      renderData.value = data.list;
      pagination.current = params.current;
      pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const search = () => {
    fetchData({
      ...basePagination,
      ...formModel.value,
    } as unknown as PolicyParams);
  };
  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };

  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };
</script>

<script lang="ts">
  export default {
    name: 'SearchTable',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
</style>
