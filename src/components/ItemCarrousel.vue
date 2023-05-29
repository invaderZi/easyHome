<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          name="style"
          class="column no-wrap flex-center"
          v-for="item in items"
          :key="item.id"
        >
          <q-icon name="style" size="56px" />
          <div>
            <h3>{{ item.title }}</h3>
          </div>
          <div class="q-mt-md text-center">
            {{ item.description }}
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
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>
