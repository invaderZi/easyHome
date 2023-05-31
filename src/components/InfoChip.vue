<template>
  <q-chip outline square :color="color" :icon="icon" class="chip">
    {{ text }} {{ place }}
  </q-chip>
</template>

<script>
export default {
  props: ["text", "color", "icon", "textColor", "place"],
};
</script>

<style scoped>
.chip {
  min-width: 100px;
}
</style>
