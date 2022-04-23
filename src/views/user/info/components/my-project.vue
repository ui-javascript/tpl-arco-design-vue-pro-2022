<template>
  <ACard class="general-card" :title="$t('userInfo.title.myProject')">
    <template #extra>
      <ALink>{{ $t('userInfo.showMore') }}</ALink>
    </template>
    <ARow :gutter="16">
      <ACol
        v-for="(project, index) in projectList"
        :key="index"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="8"
        :xxl="8"
        class="my-project-item"
      >
        <ACard>
          <ASkeleton v-if="loading" :loading="loading" :animation="true">
            <ASkeletonLine :rows="3" />
          </ASkeleton>
          <ASpace v-else direction="vertical">
            <ATypographyText bold>{{ project.name }}</ATypographyText>
            <ATypographyText type="secondary">
              {{ project.description }}
            </ATypographyText>
            <ASpace>
              <AAvatarGroup :size="24">
                {{ project.contributors }}
                <AAvatar
                  v-for="(contributor, idx) in project.contributors"
                  :key="idx"
                  :size="32"
                >
                  <img alt="avatar" :src="contributor.avatar" />
                </AAvatar>
              </AAvatarGroup>
              <ATypographyText type="secondary">
                等{{ project.peopleNumber }}人
              </ATypographyText>
            </ASpace>
          </ASpace>
        </ACard>
      </ACol>
    </ARow>
  </ACard>
</template>

<script lang="ts" setup>
  import {
    queryMyProjectList,
    MyProjectRecord,
  } from '@/views/user/user-center.api';
  import useRequest from '@/hooks/request';

  const defaultValue = Array(6).fill({} as MyProjectRecord);
  const { loading, response: projectList } = useRequest<MyProjectRecord[]>(
    queryMyProjectList,
    defaultValue
  );
</script>

<style scoped lang="less">
  :deep(.arco-card-body) {
    min-height: 128px;
    padding-bottom: 0;
  }

  .my-project {
    &-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    &-title {
      margin-top: 0 !important;
      margin-bottom: 18px !important;
    }

    &-list {
      display: flex;
      justify-content: space-between;
    }

    &-item {
      // padding-right: 16px;
      margin-bottom: 16px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
</style>
