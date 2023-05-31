<template>
  <div class="container-superior">
    <div class="carrousel-img">
      <ImovelCarrousel :items="imovel.images" />
    </div>
    <div class="descricao-imovel">
      <div>
        <h3>{{ imovel.title }}</h3>
      </div>
      <p>
        {{ imovel.description }}
      </p>
    </div>
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

<style scoped>
.container-superior {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carrousel-img {
  width: 100%;
}

.descricao-imovel {
  margin: 30px auto;
  border-left: 2px solid black;
  padding: 10px;
  max-width: 80vw;
  justify-content: center;
}

@media screen and (min-width: 1024px) {
  .container-superior {
    flex-direction: row;
    align-items: flex-start;
  }

  .carrousel-img {
    width: 60%;
    margin-bottom: 20px;
  }

  .descricao-imovel {
    width: 40%;
  }
}
</style>
