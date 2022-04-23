<template>
  <div class="container">
    <Breadcrumb :items="['menu.user', 'menu.user.info']" />
    <UserInfoHeader />
    <div class="content">
      <div class="content-left">
        <AGrid :cols="24" :col-gap="16" :row-gap="16">
          <AGridItem :span="24">
            <MyProject />
          </AGridItem>
          <AGridItem :span="24">
            <LatestActivity />
          </AGridItem>
        </AGrid>
      </div>
      <div class="content-right">
        <AGrid :cols="24" :row-gap="16">
          <AGridItem :span="24">
            <Myteam />
          </AGridItem>
          <AGridItem class="panel" :span="24">
            <LatestNotification />
          </AGridItem>
        </AGrid>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UserInfoHeader from './components/user-info-header.vue';
  import LatestNotification from './components/latest-notification.vue';
  import MyProject from './components/my-project.vue';
  import LatestActivity from './components/latest-activity.vue';
  import Myteam from './components/my-team.vue';
</script>

<script lang="ts">
  export default {
    name: 'Info',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .content {
    display: flex;
    margin-top: 12px;

    &-left {
      flex: 1;
      margin-right: 16px;
      overflow: hidden;
      // background-color: var(--color-bg-2);
      :deep(.arco-tabs-nav-tab) {
        margin-left: 16px;
      }
    }

    &-right {
      width: 332px;
    }

    .tab-pane-wrapper {
      padding: 0 16px 16px 16px;
    }
  }
</style>

<style lang="less" scoped>
  .mobile {
    .content {
      display: block;

      &-left {
        margin-right: 0;
        margin-bottom: 16px;
      }

      &-right {
        width: 100%;
      }
    }
  }
</style>
