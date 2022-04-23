<template>
  <div class="card-wrap">
    <ACard v-if="loading" :bordered="false" hoverable>
      <slot name="skeleton"></slot>
    </ACard>
    <ACard v-else :bordered="false" hoverable>
      <ASpace align="start">
        <AAvatar
          v-if="icon"
          :size="24"
          style="margin-right: 8px; background-color: #626aea"
        >
          <icon-filter />
        </AAvatar>
        <ACardMeta>
          <template #title>
            <ATypographyText style="margin-right: 10px">
              {{ title }}
            </ATypographyText>
            <template v-if="showTag">
              <ATag
                v-if="open && isExpires === false"
                size="small"
                color="green"
              >
                <template #icon>
                  <icon-check-circle-fill />
                </template>
                <span>{{ tagText }}</span>
              </ATag>
              <ATag v-else-if="isExpires" size="small" color="red">
                <template #icon>
                  <icon-check-circle-fill />
                </template>
                <span>{{ expiresTagText }}</span>
              </ATag>
            </template>
          </template>
          <template #description>
            {{ description }}
            <slot></slot>
          </template>
        </ACardMeta>
      </ASpace>
      <template #actions>
        <ASwitch v-if="actionType === 'switch'" v-model="open" />
        <ASpace v-else-if="actionType === 'button'">
          <template v-if="isExpires">
            <AButton type="outline" @click="renew">
              {{ expiresText }}
            </AButton>
          </template>
          <template v-else>
            <AButton v-if="open" @click="toggle">
              {{ closeTxt }}
            </AButton>
            <AButton v-else-if="!open" type="outline" @click="toggle">
              {{ openTxt }}
            </AButton>
          </template>
        </ASpace>
        <div v-else>
          <ASpace>
            <AButton @click="toggle(false)">
              {{ closeTxt }}
            </AButton>
            <AButton type="primary" @click="toggle(true)">
              {{ openTxt }}
            </AButton>
          </ASpace>
        </div>
      </template>
    </ACard>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useToggle } from '@vueuse/core';

  const props = defineProps({
    loading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    actionType: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: Boolean,
      default: false,
    },
    openTxt: {
      type: String,
      default: '',
    },
    closeTxt: {
      type: String,
      default: '',
    },
    expiresText: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    showTag: {
      type: Boolean,
      default: true,
    },
    tagText: {
      type: String,
      default: '',
    },
    expires: {
      type: Boolean,
      default: false,
    },
    expiresTagText: {
      type: String,
      default: '',
    },
  });
  const [open, toggle] = useToggle(props.defaultValue);
  const isExpires = ref(props.expires);
  const renew = () => {
    isExpires.value = false;
  };
</script>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    border: 1px solid var(--color-neutral-3);
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
      // box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    }

    :deep(.arco-card) {
      height: 100%;
      border-radius: 4px;

      .arco-card-body {
        height: 100%;

        .arco-space {
          width: 100%;
          height: 100%;

          .arco-space-item {
            height: 100%;

            &:last-child {
              flex: 1;
            }

            .arco-card-meta {
              display: flex;
              flex-flow: column;
              height: 100%;

              .arco-card-meta-content {
                flex: 1;

                .arco-card-meta-description {
                  margin-top: 8px;
                  color: rgb(var(--gray-6));
                  font-size: 12px;
                  line-height: 20px;
                }
              }

              .arco-card-meta-footer {
                margin-top: 0;
              }
            }
          }
        }
      }
    }

    :deep(.arco-card-meta-title) {
      display: flex;
      align-items: center;

      // To prevent the shaking
      line-height: 28px;
    }

    :deep(.arco-skeleton-line) {
      &:last-child {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }
  }
</style>
