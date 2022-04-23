<template>
  <ACard
    class="general-card"
    :title="$t('workplace.docs')"
    :header-style="{ paddingBottom: 0 }"
    :body-style="{ paddingTop: 0 }"
    style="height: 160px"
  >
    <template #extra>
      <ALink>{{ $t('workplace.viewMore') }}</ALink>
    </template>
    <ARow>
      <ACol :span="12">
        <ALink>
          {{ $t('workplace.docs.productOverview') }}
        </ALink>
      </ACol>
      <ACol :span="12">
        <ALink>
          {{ $t('workplace.docs.userGuide') }}
        </ALink>
      </ACol>
      <ACol :span="12">
        <ALink>
          {{ $t('workplace.docs.workflow') }}
        </ALink>
      </ACol>
      <ACol :span="12">
        <ALink>
          {{ $t('workplace.docs.interfaceDocs') }}
        </ALink>
      </ACol>
    </ARow>
  </ACard>
</template>

<style lang="less" scoped>
  .arco-card-body .arco-link {
    margin: 10px 0;
    color: rgb(var(--gray-8));
  }
</style>
