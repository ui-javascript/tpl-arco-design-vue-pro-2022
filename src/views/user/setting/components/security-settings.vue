<template>
  <AList :bordered="false">
    <AListItem>
      <AListItemMeta>
        <template #avatar>
          <ATypographyParagraph>
            {{ $t('userSetting.SecuritySettings.form.label.password') }}
          </ATypographyParagraph>
        </template>
        <template #description>
          <div class="content">
            <ATypographyParagraph>
              {{ $t('userSetting.SecuritySettings.placeholder.password') }}
            </ATypographyParagraph>
          </div>
          <div class="operation">
            <ALink>
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </ALink>
          </div>
        </template>
      </AListItemMeta>
    </AListItem>
    <AListItem>
      <AListItemMeta>
        <template #avatar>
          <ATypographyParagraph>
            {{ $t('userSetting.SecuritySettings.form.label.securityQuestion') }}
          </ATypographyParagraph>
        </template>
        <template #description>
          <div class="content">
            <ATypographyParagraph class="tip">
              {{
                $t('userSetting.SecuritySettings.placeholder.securityQuestion')
              }}
            </ATypographyParagraph>
          </div>
          <div class="operation">
            <ALink>
              {{ $t('userSetting.SecuritySettings.button.settings') }}
            </ALink>
          </div>
        </template>
      </AListItemMeta>
    </AListItem>
    <AListItem>
      <AListItemMeta>
        <template #avatar>
          <ATypographyParagraph>
            {{ $t('userSetting.SecuritySettings.form.label.phone') }}
          </ATypographyParagraph>
        </template>
        <template #description>
          <div class="content">
            <ATypographyParagraph> 已绑定：150******50 </ATypographyParagraph>
          </div>
          <div class="operation">
            <ALink>
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </ALink>
          </div>
        </template>
      </AListItemMeta>
    </AListItem>
    <AListItem>
      <AListItemMeta>
        <template #avatar>
          <ATypographyParagraph>
            {{ $t('userSetting.SecuritySettings.form.label.email') }}
          </ATypographyParagraph>
        </template>
        <template #description>
          <div class="content">
            <ATypographyParagraph class="tip">
              {{ $t('userSetting.SecuritySettings.placeholder.email') }}
            </ATypographyParagraph>
          </div>
          <div class="operation">
            <ALink>
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </ALink>
          </div>
        </template>
      </AListItemMeta>
    </AListItem>
  </AList>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
  :deep(.arco-list-item) {
    border-bottom: none !important;

    .arco-typography {
      margin-bottom: 20px;
    }

    .arco-list-item-meta-avatar {
      margin-bottom: 1px;
    }

    .arco-list-item-meta {
      padding: 0;
    }
  }

  :deep(.arco-list-item-meta-content) {
    flex: 1;
    border-bottom: 1px solid var(--color-neutral-3);

    .arco-list-item-meta-description {
      display: flex;
      flex-flow: row;
      justify-content: space-between;

      .tip {
        color: rgb(var(--gray-6));
      }

      .operation {
        margin-right: 6px;
      }
    }
  }
</style>
