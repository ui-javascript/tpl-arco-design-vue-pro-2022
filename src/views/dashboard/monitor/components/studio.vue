<template>
  <ACard class="general-card" :title="$t('monitor.title.studioPreview')">
    <template #extra>
      <icon-more />
    </template>
    <div class="studio-wrapper">
      <img
        src="http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp"
        class="studio-preview"
      />
      <div class="studio-bar">
        <div v-if="userInfo">
          <ASpace :size="12">
            <AAvatar :size="24">
              <img :src="userInfo.avatar" />
            </AAvatar>
            <ATypographyText>
              {{ userInfo.name }} {{ $t('monitor.studioPreview.studio') }}
            </ATypographyText>
          </ASpace>
        </div>
        <ATypographyText type="secondary">
          36,000 {{ $t('monitor.studioPreview.watching') }}
        </ATypographyText>
      </div>
    </div>
  </ACard>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/store';

  const userInfo = useUserStore();
</script>

<style scoped lang="less">
  .studio {
    &-preview {
      display: block;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }

    &-bar {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
    }
  }
</style>
