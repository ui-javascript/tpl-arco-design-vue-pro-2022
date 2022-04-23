<template>
  <AForm
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 8 }"
    :wrapper-col-props="{ span: 16 }"
  >
    <AFormItem
      field="email"
      :label="$t('userSetting.basicInfo.form.label.email')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.email.required'),
        },
      ]"
    >
      <AInput
        v-model="formData.email"
        :placeholder="$t('userSetting.basicInfo.placeholder.email')"
      />
    </AFormItem>
    <AFormItem
      field="nickname"
      :label="$t('userSetting.basicInfo.form.label.nickname')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.nickname.required'),
        },
      ]"
    >
      <AInput
        v-model="formData.nickname"
        :placeholder="$t('userSetting.basicInfo.placeholder.nickname')"
      />
    </AFormItem>
    <AFormItem
      field="countryRegion"
      :label="$t('userSetting.basicInfo.form.label.countryRegion')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.countryRegion.required'),
        },
      ]"
    >
      <ASelect
        v-model="formData.countryRegion"
        :placeholder="$t('userSetting.basicInfo.placeholder.area')"
      >
        <AOption value="China">中国</AOption>
      </ASelect>
    </AFormItem>
    <AFormItem
      field="area"
      :label="$t('userSetting.basicInfo.form.label.area')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.area.required'),
        },
      ]"
    >
      <ACascader
        v-model="formData.area"
        :placeholder="$t('userSetting.basicInfo.placeholder.area')"
        :options="[
          {
            label: '北京',
            value: 'beijing',
            children: [
              {
                label: '北京',
                value: 'beijing',
                children: [
                  {
                    label: '朝阳',
                    value: 'chaoyang',
                  },
                ],
              },
            ],
          },
        ]"
        allow-clear
      />
    </AFormItem>
    <AFormItem
      field="address"
      :label="$t('userSetting.basicInfo.form.label.address')"
    >
      <AInput
        v-model="formData.address"
        :placeholder="$t('userSetting.basicInfo.placeholder.address')"
      />
    </AFormItem>
    <AFormItem
      field="profile"
      :label="$t('userSetting.basicInfo.form.label.profile')"
      :rules="[
        {
          maxLength: 200,
          message: $t('userSetting.form.error.profile.maxLength'),
        },
      ]"
      row-class="keep-margin"
    >
      <ATextarea
        v-model="formData.profile"
        :placeholder="$t('userSetting.basicInfo.placeholder.profile')"
      />
    </AFormItem>
    <AFormItem>
      <ASpace>
        <AButton type="primary" @click="validate">
          {{ $t('userSetting.save') }}
        </AButton>
        <AButton type="secondary" @click="reset">
          {{ $t('userSetting.reset') }}
        </AButton>
      </ASpace>
    </AFormItem>
  </AForm>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BasicInfoModel } from '@/views/user/user-center.api';

  const formRef = ref<FormInstance>();
  const formData = ref<BasicInfoModel>({
    email: '',
    nickname: '',
    countryRegion: '',
    area: '',
    address: '',
    profile: '',
  });
  const validate = async () => {
    const res = await formRef.value?.validate();
    if (!res) {
      // do some thing
      // you also can use html-type to submit
    }
  };
  const reset = async () => {
    await formRef.value?.resetFields();
  };
</script>

<style scoped lang="less">
  .form {
    width: 540px;
    margin: 0 auto;
  }
</style>
