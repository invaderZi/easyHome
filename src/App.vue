<template>
  <MainLayoutVue>
    <router-view />
  </MainLayoutVue>
</template>

<script>
import { defineComponent } from "vue";
import MainLayoutVue from "./layouts/MainLayout.vue";

export default defineComponent({
  components: { MainLayoutVue },
  name: "App",
});
</script>
