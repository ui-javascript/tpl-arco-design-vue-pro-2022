<template>
  <ACard class="general-card" :title="$t('monitor.title.studioInfo')">
    <AForm :model="{}" layout="vertical">
      <AFormItem :label="$t('monitor.studioInfo.label.studioTitle')" required>
        <AInput
          :placeholder="`王立群${$t(
            'monitor.studioInfo.placeholder.studioTitle'
          )}`"
        />
      </AFormItem>
      <AFormItem
        :label="$t('monitor.studioInfo.label.onlineNotification')"
        required
      >
        <ATextarea />
      </AFormItem>
      <AFormItem
        :label="$t('monitor.studioInfo.label.studioCategory')"
        required
      >
        <AInputSearch />
      </AFormItem>
      <AFormItem
        :label="$t('monitor.studioInfo.label.studioCategory')"
        required
      >
        <AInputSearch />
      </AFormItem>
    </AForm>
    <AButton type="primary">{{ $t('monitor.studioInfo.btn.fresh') }}</AButton>
  </ACard>
</template>

<script lang="ts" setup></script>
