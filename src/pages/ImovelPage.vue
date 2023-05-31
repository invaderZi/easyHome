<template>
  <div>
    <ImovelCarrousel
      :items="imovel.images"
      :imovelDescription="imovel.description"
      :imovelTitle="imovel.title"
    />
  </div>
</template>
<script>
import ImovelCarrousel from "src/components/ImgCarrousel.vue";
import ImoveisService from "src/api-mock/mockApi.js";

export default {
  components: { ImovelCarrousel },

  computed: {
    imovelId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      imovel: {},
    };
  },

  mounted() {
    this.getImovel(this.imovelId);
  },

  methods: {
    async getImovel(id) {
      this.imovel = await ImoveisService.getImovelById(id);
      console.log(this.imovel);
    },
  },
};
</script>
