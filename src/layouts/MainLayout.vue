<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title> easyHome </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="page-container">
      <div class="content-wrapper">
        <!-- Conteúdo da página -->
        <slot></slot>
      </div>
    </q-page-container>
  </q-layout>
</template>

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
</style>
