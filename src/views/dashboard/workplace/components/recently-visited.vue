<template>
  <ACard
    class="general-card"
    :title="$t('workplace.recently.visited')"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ paddingTop: '26px' }"
  >
    <div style="margin-bottom: -1rem">
      <ARow :gutter="8">
        <ACol v-for="link in links" :key="link.text" :span="8" class="wrapper">
          <div class="icon">
            <component :is="link.icon" />
          </div>
          <ATypographyParagraph class="text">
            {{ $t(link.text) }}
          </ATypographyParagraph>
        </ACol>
      </ARow>
    </div>
  </ACard>
</template>

<script lang="ts" setup>
  const links = [
    {
      text: 'workplace.contentManagement',
      icon: 'icon-storage',
    },
    {
      text: 'workplace.contentStatistical',
      icon: 'icon-file',
    },
    {
      text: 'workplace.advanced',
      icon: 'icon-settings',
    },
  ];
</script>

<style lang="less" scoped></style>
