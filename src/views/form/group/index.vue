<template>
  <div class="container">
    <Breadcrumb :items="['menu.form', 'menu.form.group']" />
    <AForm ref="formRef" layout="vertical" :model="formData">
      <ASpace direction="vertical" :size="16">
        <ACard class="general-card">
          <template #title>
            {{ $t('groupForm.title.video') }}
          </template>
          <ARow :gutter="80">
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.mode')"
                field="video.mode"
              >
                <ASelect :placeholder="$t('groupForm.placeholder.video.mode')">
                  <AOption value="custom">自定义</AOption>
                  <AOption value="mode1">模式1</AOption>
                  <AOption value="mode2">模式2</AOption>
                </ASelect>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.acquisition.resolution')"
                field="video.acquisition.resolution"
              >
                <ASelect
                  :placeholder="
                    $t('groupForm.placeholder.video.acquisition.resolution')
                  "
                >
                  <AOption value="resolution1">分辨率1</AOption>
                  <AOption value="resolution2">分辨率2</AOption>
                  <AOption value="resolution3">分辨率3</AOption>
                </ASelect>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.acquisition.frameRate')"
                field="video.acquisition.frameRate"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.acquisition.frameRate')
                  "
                >
                  <template #append> fps </template>
                </AInput>
              </AFormItem>
            </ACol>
          </ARow>
          <ARow :gutter="80">
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.resolution')"
                field="video.encoding.resolution"
              >
                <ASelect
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.resolution')
                  "
                >
                  <AOption value="resolution1">分辨率1</AOption>
                  <AOption value="resolution2">分辨率2</AOption>
                  <AOption value="resolution3">分辨率3</AOption>
                </ASelect>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.rate.min')"
                field="video.encoding.rate.min"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.rate.min')
                  "
                  add-after="bps"
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.rate.max')"
                field="video.encoding.rate.max"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.rate.max')
                  "
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>
          </ARow>
          <ARow :gutter="80">
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.rate.default')"
                field="video.encoding.rate.default"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.rate.default')
                  "
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.frameRate')"
                field="video.encoding.frameRate"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.frameRate')
                  "
                >
                  <template #append> fps </template>
                </AInput>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.video.encoding.profile')"
                field="video.encoding.profile"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.video.encoding.profile')
                  "
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>
          </ARow>
        </ACard>
        <ACard class="general-card">
          <template #title>
            {{ $t('groupForm.title.audio') }}
          </template>
          <ARow :gutter="80">
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.audio.mode')"
                field="audio.mode"
              >
                <ASelect :placeholder="$t('groupForm.placeholder.audio.mode')">
                  <AOption value="custom">自定义</AOption>
                  <AOption value="mode1">模式1</AOption>
                  <AOption value="mode2">模式2</AOption>
                </ASelect>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.audio.acquisition.channels')"
                field="audio.acquisition.channels"
              >
                <ASelect
                  :placeholder="
                    $t('groupForm.placeholder.audio.acquisition.channels')
                  "
                >
                  <AOption value="1">1</AOption>
                  <AOption value="2">2</AOption>
                  <AOption value="3">3</AOption>
                </ASelect>
              </AFormItem>
            </ACol>
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.audio.encoding.channels')"
                field="audio.encoding.channels"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.audio.encoding.channels')
                  "
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>
          </ARow>
          <ARow :gutter="80">
            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.audio.encoding.rate')"
                field="audio.encoding.rate"
              >
                <AInput
                  :placeholder="$t('groupForm.placeholder.audio.encoding.rate')"
                >
                  <template #append> bps </template>
                </AInput>
              </AFormItem>
            </ACol>

            <ACol :span="8">
              <AFormItem
                :label="$t('groupForm.form.label.audio.encoding.profile')"
                field="audio.encoding.profile"
              >
                <AInput
                  :placeholder="
                    $t('groupForm.placeholder.audio.encoding.profile')
                  "
                >
                  <template #append> fps </template>
                </AInput>
              </AFormItem>
            </ACol>
          </ARow>
        </ACard>
        <ACard class="general-card" :bordered="false">
          <template #title>
            {{ $t('groupForm.title.description') }}
          </template>
          <AFormItem
            :label="$t('groupForm.form.label.parameterDescription')"
            field="audio.approvers"
          >
            <ATextarea :placeholder="$t('groupForm.placeholder.description')" />
          </AFormItem>
        </ACard>
      </ASpace>
      <div class="actions">
        <ASpace>
          <AButton>
            {{ $t('groupForm.reset') }}
          </AButton>
          <AButton type="primary" :loading="loading" @click="onSubmitClick">
            {{ $t('groupForm.submit') }}
          </AButton>
        </ASpace>
      </div>
    </AForm>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import useLoading from '@/hooks/loading';

  const formData = ref({});
  const formRef = ref<FormInstance>();
  const { loading, setLoading } = useLoading();
  const onSubmitClick = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
</script>

<script lang="ts">
  export default {
    name: 'Group',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 40px 20px;
    overflow: hidden;
  }

  .actions {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 60px;
    padding: 14px 20px 14px 0;
    text-align: right;
    background: var(--color-bg-2);
  }
</style>
