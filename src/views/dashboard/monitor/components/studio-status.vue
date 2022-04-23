<template>
  <ACard
    class="general-card"
    :title="$t('monitor.studioStatus.title.studioStatus')"
  >
    <template #extra>
      <ATag color="green">{{ $t('monitor.studioStatus.smooth') }}</ATag>
    </template>
    <ADescriptions layout="horizontal" :data="dataStatus" :column="2">
      <template #label="{ label }">
        <span
          v-if="['mainstream', 'hotStandby', 'coldStandby'].includes(label)"
        >
          <ATypographyText style="padding-right: 8px">
            {{ $t(`monitor.studioStatus.${label}`) }}
          </ATypographyText>
          {{ $t('monitor.studioStatus.bitRate') }}
        </span>
        <span v-else>{{ label }}</span>
      </template>
    </ADescriptions>
    <ATypographyTitle style="margin-bottom: 16px" :heading="6">
      {{ $t('monitor.studioStatus.title.pictureInfo') }}
    </ATypographyTitle>
    <ADescriptions layout="horizontal" :data="dataPicture" :column="2" />
  </ACard>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const dataStatus = computed(() => [
    {
      label: 'mainstream',
      value: '6 Mbps',
    },
    {
      label: t('monitor.studioStatus.frameRate'),
      value: '60',
    },
    {
      label: 'hotStandby',
      value: '6 Mbps',
    },
    {
      label: t('monitor.studioStatus.frameRate'),
      value: '60',
    },
    {
      label: 'coldStandby',
      value: '6 Mbps',
    },
    {
      label: t('monitor.studioStatus.frameRate'),
      value: '60',
    },
  ]);
  const dataPicture = computed(() => [
    {
      label: t('monitor.studioStatus.line'),
      value: '热备',
    },
    {
      label: 'CDN',
      value: 'KS',
    },
    {
      label: t('monitor.studioStatus.play'),
      value: 'FLV',
    },
    {
      label: t('monitor.studioStatus.pictureQuality'),
      value: '原画',
    },
  ]);
</script>

<style scoped lang="less">
  :deep(.arco-descriptions-item-label) {
    padding-right: 6px;
  }
</style>
