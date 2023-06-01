<template>
  <div class="q-pa-md">
    <div class="carrousel">
      <q-carousel
        v-model="slide"
        arrows
        swipeable
        infinite
        animated
        control-type="unlevated"
        control-color="white"
        control-text-color="black"
        height="400px"
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
  setup() {
    const slide = ref(1);

    return {
      slide,
    };
  },
};
</script>

<style scoped>
.carrousel {
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border: 4px solid black;
  width: 100%;
  max-width: 100%;
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

@media screen and (max-width: 520px), (min-width: 1025px) {
  .carrousel {
    width: 100%;
    max-width: 100%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) and (orientation: landscape) {
  .carrousel {
    width: 70%;
  }
}
@media screen and (max-width: 300px) {
  .carrousel {
    min-width: 300px;
  }
}
</style>
