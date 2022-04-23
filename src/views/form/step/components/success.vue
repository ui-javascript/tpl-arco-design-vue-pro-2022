<template>
  <div class="success-wrap">
    <AResult
      status="success"
      :title="$t('stepForm.success.title')"
      :subtitle="$t('stepForm.success.subTitle')"
    />
    <ASpace :size="16">
      <AButton key="view" type="primary">
        {{ $t('stepForm.button.view') }}
      </AButton>
      <AButton key="again" type="secondary" @click="oneMore">
        {{ $t('stepForm.button.again') }}
      </AButton>
    </ASpace>
    <div class="details-wrapper">
      <ATypographyTitle :heading="6" style="margin-top: 0">
        {{ $t('stepForm.form.description.title') }}
      </ATypographyTitle>
      <ATypographyParagraph style="margin-bottom: 0">
        {{ $t('stepForm.form.description.text') }}
        <ALink href="link">{{ $t('stepForm.button.view') }}</ALink>
      </ATypographyParagraph>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const emits = defineEmits(['changeStep']);
  const oneMore = () => {
    emits('changeStep', 1);
  };
</script>

<style scoped lang="less">
  .success-wrap {
    text-align: center;
  }

  :deep(.arco-result) {
    padding-top: 0;
  }

  .details-wrapper {
    width: 895px;
    margin-top: 54px;
    padding: 20px;
    text-align: left;
    background-color: var(--color-fill-2);
  }
</style>
