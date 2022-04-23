<template>
  <div class="container">
    <Breadcrumb :items="['menu.result', 'menu.result.success']" />
    <div class="wrapper">
      <AResult
        class="result"
        status="success"
        :title="$t('success.result.title')"
        :subtitle="$t('success.result.subTitle')"
      >
        <template #extra>
          <ASpace class="operation-wrap" :size="16">
            <AButton key="again" type="secondary">
              {{ $t('success.result.printResult') }}
            </AButton>
            <AButton key="back" type="primary">
              {{ $t('success.result.projectList') }}
            </AButton>
          </ASpace>
        </template>
      </AResult>

      <div class="steps-wrapper">
        <ATypographyParagraph bold>{{
          $t('success.result.progress')
        }}</ATypographyParagraph>
        <ASteps type="dot" :current="2">
          <AStep
            :title="$t('success.submitApplication')"
            description="2020/10/10 14:00:39"
          />
          <AStep
            :title="$t('success.leaderReview')"
            :description="$t('success.processing')"
          />
          <AStep
            :title="$t('success.purchaseCertificate')"
            :description="$t('success.waiting')"
          />
          <AStep
            :title="$t('success.safetyTest')"
            :description="$t('success.waiting')"
          />
          <AStep
            :title="$t('success.launched')"
            :description="$t('success.waiting')"
          />
        </ASteps>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'Success',
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
    margin: 150px 0 0 0;
  }

  .operation-wrap {
    margin-bottom: 40px;
    text-align: center;
  }

  .steps-wrapper {
    width: 100%;
    min-width: fit-content;
    margin-bottom: 150px;
    padding: 20px;
    background-color: rgb(var(--gray-1));
  }
</style>

<style lang="less" scoped>
  .mobile {
    .wrapper {
      padding: 24px 10px;

      .steps-wrapper {
        transform: scale(0.8);
      }
    }
  }
</style>
