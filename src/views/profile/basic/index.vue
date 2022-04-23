<template>
  <div class="container">
    <Breadcrumb :items="['menu.profile', 'menu.profile.basic']" />
    <ASpace direction="vertical" :size="16" fill>
      <ACard class="general-card" :title="$t('basicProfile.title.form')">
        <template #extra>
          <ASpace>
            <AButton>{{ $t('basicProfile.cancel') }}</AButton>
            <AButton type="primary">
              {{ $t('basicProfile.goBack') }}
            </AButton>
          </ASpace>
        </template>
        <ASteps v-model:current="step" line-less class="steps">
          <AStep>{{ $t('basicProfile.steps.commit') }}</AStep>
          <AStep>{{ $t('basicProfile.steps.approval') }}</AStep>
          <AStep>{{ $t('basicProfile.steps.finish') }}</AStep>
        </ASteps>
      </ACard>
      <ACard class="general-card">
        <ProfileItem :loading="loading" :render-data="currentData" />
      </ACard>
      <ACard class="general-card">
        <ProfileItem :loading="preLoading" type="pre" :render-data="preData" />
      </ACard>
      <OperationLog />
    </ASpace>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import {
    queryProfileBasic,
    ProfileBasicRes,
  } from '@/views/profile/profile.api';
  import ProfileItem from './components/profile-item.vue';
  import OperationLog from './components/operation-log.vue';

  const { loading, setLoading } = useLoading(true);
  const { loading: preLoading, setLoading: preSetLoading } = useLoading(true);
  const currentData = ref<ProfileBasicRes>({} as ProfileBasicRes);
  const preData = ref<ProfileBasicRes>({} as ProfileBasicRes);
  const step = ref(1);
  const fetchCurrentData = async () => {
    try {
      const { data } = await queryProfileBasic();
      currentData.value = data;
      step.value = 2;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const fetchPreData = async () => {
    try {
      const { data } = await queryProfileBasic();
      preData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      preSetLoading(false);
    }
  };
  fetchCurrentData();
  fetchPreData();
</script>

<script lang="ts">
  export default {
    name: 'Basic',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .steps {
    max-width: 548px;
    margin: 0 auto 10px;
  }
</style>
