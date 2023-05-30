<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide
          v-for="img in items"
          :name="img.id"
          :img-src="img.source"
          :key="img.id"
        >
          <div class="q-mt-md text-center">
            {{ img.description }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["items"],
  data() {
    return {};
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style scoped>
.imagem {
  display: inline-block;
  background-color: red;
  min-width: 600px;
  min-height: 200px;
  border: 1px solid red;
}
</style>
