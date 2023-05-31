<template>
  <div class="q-pa-md">
    <div class="carrousel">
      <q-carousel
        v-model="slide"
        arrows
        swipeable
        infinite
        animated
        height="360px"
        control-type="unlevated"
        control-color="white"
        control-text-color="black"
      >
        <q-carousel-slide
          v-for="img in items"
          :name="img.id"
          :key="img.id"
          class="bg-white"
        >
          <q-img :src="img.source" fit="cover" :ratio="16 / 9" height="100%" />
          <!-- <div class="img-caption">
            {{ img.description.toUpperCase() }}
          </div> -->
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
.carrousel {
  max-width: 50vw;
  min-width: 480px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  max-height: 500px;
  border: 4px solid black;
}
.img-caption {
  text-align: center;
  padding: 2px;
  margin: 10px auto;
  color: black;
  max-width: 90%;
  border-radius: 0px;
}

.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: 0 !important;
}
</style>
