<template>
  <div class="container">
    <Breadcrumb :items="['menu.user', 'menu.user.setting']" />
    <ARow style="margin-bottom: 16px">
      <ACol :span="24">
        <UserPanel />
      </ACol>
    </ARow>
    <ARow class="wrapper">
      <ACol :span="24">
        <ATabs default-active-key="1" type="rounded">
          <ATabPane key="1" :title="$t('userSetting.tab.basicInformation')">
            <BasicInformation />
          </ATabPane>
          <ATabPane key="2" :title="$t('userSetting.tab.securitySettings')">
            <SecuritySettings />
          </ATabPane>
          <ATabPane key="3" :title="$t('userSetting.tab.certification')">
            <Certification />
          </ATabPane>
        </ATabs>
      </ACol>
    </ARow>
  </div>
</template>

<script lang="ts" setup>
  import UserPanel from './components/user-panel.vue';
  import BasicInformation from './components/basic-information.vue';
  import SecuritySettings from './components/security-settings.vue';
  import Certification from './components/certification.vue';
</script>

<script lang="ts">
  export default {
    name: 'Setting',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .wrapper {
    min-height: 580px;
    padding: 20px 0 0 20px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }

  :deep(.section-title) {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 14px;
  }
</style>
