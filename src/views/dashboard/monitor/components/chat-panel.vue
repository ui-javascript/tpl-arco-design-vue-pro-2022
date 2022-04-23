<template>
  <ACard
    class="general-card chat-panel"
    :title="$t('monitor.title.chatPanel')"
    :bordered="false"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{
      height: '100%',
      paddingTop: '16px',
      display: 'flex',
      flexFlow: 'column',
    }"
  >
    <ASpace :size="8">
      <ASelect style="width: 86px" default-value="all">
        <AOption value="all">
          {{ $t('monitor.chat.options.all') }}
        </AOption>
      </ASelect>
      <AInputSearch
        :placeholder="$t('monitor.chat.placeholder.searchCategory')"
      />
      <AButton type="text">
        <icon-download />
      </AButton>
    </ASpace>
    <div class="chat-panel-content">
      <ASpin :loading="loading" style="width: 100%">
        <ChatList :render-list="chatData" />
      </ASpin>
    </div>
    <div class="chat-panel-footer">
      <ASpace :size="8">
        <AInput>
          <template #suffix>
            <icon-face-smile-fill />
          </template>
        </AInput>
        <AButton type="primary">{{ $t('monitor.chat.update') }}</AButton>
      </ASpace>
    </div>
  </ACard>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    queryChatList,
    ChatRecord,
  } from '@/components/message-box/message.api';
  import useLoading from '@/hooks/loading';
  import ChatList from './chat-list.vue';

  const { loading, setLoading } = useLoading(true);
  const chatData = ref<ChatRecord[]>([]);
  const fetchData = async () => {
    try {
      const { data } = await queryChatList();
      chatData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped lang="less">
  .chat-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    // padding: 20px;
    background-color: var(--color-bg-2);

    &-content {
      flex: 1;
      margin: 20px 0;
    }
  }
</style>
