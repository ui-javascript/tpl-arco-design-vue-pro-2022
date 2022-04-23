<template>
  <div class="container">
    <Breadcrumb :items="['menu.result', 'menu.result.error']" />
    <div class="wrapper">
      <AResult
        class="result"
        status="error"
        :title="$t('error.result.title')"
        :subtitle="$t('error.result.subTitle')"
      >
        <template #extra>
          <ASpace class="operation-wrap" :size="16">
            <AButton key="again" type="secondary">
              {{ $t('error.result.goBack') }}
            </AButton>
            <AButton key="back" type="primary">
              {{ $t('error.result.retry') }}
            </AButton>
          </ASpace>
        </template>
      </AResult>

      <div class="details-wrapper">
        <ATypographyTitle :heading="6" style="margin-top: 0">
          {{ $t('error.detailTitle') }}
        </ATypographyTitle>
        <ATypographyParagraph style="margin-bottom: 0">
          <ol>
            <li>
              {{ $t('error.detailLine.record') }}
              <ALink>
                <IconLink />
                {{ $t('error.detailLine.record.link') }}
              </ALink>
            </li>
            <li>{{ $t('error.detailLine.auth') }}</li>
          </ol>
        </ATypographyParagraph>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Error',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  .wrapper {
    padding: 24px 150px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }

  .result {
    margin: 150px 0 36px 0;
  }

  .operation-wrap {
    margin-bottom: 40px;
    text-align: center;
  }

  .details-wrapper {
    width: 100%;
    margin-bottom: 150px;
    padding: 20px;
    background-color: rgb(var(--gray-1));
  }
</style>
