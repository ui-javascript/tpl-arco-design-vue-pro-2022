<template>
  <ACard
    class="general-card"
    :title="$t('workplace.quick.operation')"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '24px 20px 0 20px' }"
  >
    <template #extra>
      <ALink>{{ $t('workplace.quickOperation.setup') }}</ALink>
    </template>
    <ARow :gutter="8">
      <ACol v-for="link in links" :key="link" :span="8" class="wrapper">
        <div class="icon">
          <component :is="link.icon" />
        </div>
        <ATypographyParagraph class="text">
          {{ $t(link.text) }}
        </ATypographyParagraph>
      </ACol>
    </ARow>
    <ADivider class="split-line" style="margin: 0" />
  </ACard>
</template>

<script lang="ts" setup>
  const links = [
    { text: 'workplace.contentManagement', icon: 'icon-file' },
    { text: 'workplace.contentStatistical', icon: 'icon-storage' },
    { text: 'workplace.advanced', icon: 'icon-settings' },
    { text: 'workplace.onlinePromotion', icon: 'icon-mobile' },
    { text: 'workplace.contentPutIn', icon: 'icon-fire' },
  ];
</script>

<style scoped lang="less"></style>
