<template>
  <ACard class="general-card" :title="$t('monitor.title.quickOperation')">
    <ASpace direction="vertical" fill :size="10">
      <AButton long>
        {{ $t('monitor.quickOperation.changeClarity') }}
        <template #icon>
          <IconTags />
        </template>
      </AButton>
      <AButton long>
        {{ $t('monitor.quickOperation.switchStream') }}
        <template #icon>
          <IconSwap />
        </template>
      </AButton>
      <AButton long>
        {{ $t('monitor.quickOperation.removeClarity') }}
        <template #icon>
          <IconStop />
        </template>
      </AButton>
      <AButton long>
        {{ $t('monitor.quickOperation.pushFlowGasket') }}
        <template #icon>
          <IconArrowRight />
        </template>
      </AButton>
    </ASpace>
  </ACard>
</template>

<script lang="ts" setup></script>
