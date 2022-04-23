<template>
  <AForm
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 6 }"
    :wrapper-col-props="{ span: 18 }"
  >
    <AFormItem
      field="advertisingSource"
      :label="$t('stepForm.form.label.advertisingSource')"
      :rules="[
        {
          required: true,
          message: $t('stepForm.form.error.advertisingSource.required'),
        },
      ]"
    >
      <AInput
        v-model="formData.advertisingSource"
        :placeholder="$t('stepForm.placeholder.advertisingSource')"
      />
    </AFormItem>
    <AFormItem
      field="advertisingMedia"
      :label="$t('stepForm.form.label.advertisingMedia')"
      :rules="[
        {
          required: true,
          message: $t('stepForm.form.error.advertisingMedia.required'),
        },
      ]"
    >
      <AInput
        v-model="formData.advertisingMedia"
        :placeholder="$t('stepForm.placeholder.advertisingMedia')"
      />
    </AFormItem>
    <AFormItem
      field="keyword"
      :label="$t('stepForm.form.label.keyword')"
      :rules="[
        { required: true, message: $t('stepForm.form.error.keyword.required') },
      ]"
    >
      <ASelect
        v-model="formData.keyword"
        :placeholder="$t('stepForm.placeholder.keyword')"
        multiple
      >
        <AOption>今日头条</AOption>
        <AOption>火山</AOption>
      </ASelect>
    </AFormItem>
    <AFormItem
      field="pushNotify"
      :label="$t('stepForm.form.label.pushNotify')"
      :rules="[{ required: true }]"
    >
      <ASwitch v-model="formData.pushNotify" />
    </AFormItem>
    <AFormItem
      field="advertisingContent"
      :label="$t('stepForm.form.label.advertisingContent')"
      :rules="[
        {
          required: true,
          message: $t('stepForm.form.error.advertisingContent.required'),
        },
        {
          maxLength: 200,
          message: $t('stepForm.form.error.advertisingContent.maxLength'),
        },
      ]"
      row-class="keep-margin"
    >
      <ATextarea
        v-model="formData.advertisingContent"
        :placeholder="$t('stepForm.placeholder.advertisingContent')"
      />
    </AFormItem>
    <AFormItem>
      <!-- <AButton type="primary" @click="onNextClick">
        {{ $t('stepForm.button.next') }}
      </AButton> -->
      <ASpace>
        <AButton type="secondary" @click="goPrev">
          {{ $t('stepForm.button.prev') }}
        </AButton>
        <AButton type="primary" @click="onNextClick">
          {{ $t('stepForm.button.next') }}
        </AButton>
      </ASpace>
    </AFormItem>
  </AForm>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { ChannelInfoModel } from '@/views/form/form.api';

  const emits = defineEmits(['changeStep']);

  const formRef = ref<FormInstance>();
  const formData = ref<ChannelInfoModel>({
    advertisingSource: '',
    advertisingMedia: '',
    keyword: [],
    pushNotify: true,
    advertisingContent: '',
  });

  const onNextClick = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      emits('changeStep', 'submit', { ...formData.value });
    }
  };
  const goPrev = () => {
    emits('changeStep', 'backward');
  };
</script>

<style scoped lang="less">
  .container {
    .keep-margin {
      margin-bottom: 20px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0;
    background-color: var(--color-bg-2);
  }

  .steps {
    margin-bottom: 36px;
  }

  .form {
    width: 540px;
  }

  .form-content {
    padding: 8px 50px 0 30px;
  }
</style>
