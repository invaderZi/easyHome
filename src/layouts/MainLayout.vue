<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title> <span class="title">easyHome</span> </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      bordered
      offset-top="64"
    >
      <!-- Conteúdo do menu lateral -->
      <q-list>
        <q-item>
          <q-item-section>Item 1</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Item 2</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Item 3</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="page-container">
      <div class="content-wrapper">
        <!-- Conteúdo da página -->
        <slot></slot>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      rightDrawerOpen: false,
    };
  },
  methods: {
    toggleRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
  },
};
</script>

<style scoped>
.page-container {
  padding: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin: 5px auto;
}

.content-wrapper {
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
}

.title {
  font-weight: 600;
}
</style>
