<template>
  <div class="container-superior">
    <div class="carrousel-img">
      <ImovelCarrousel :items="imovel.images" />
      <div class="chips">
        <Chip
          v-if="imovel.quartos > 0"
          color="black"
          icon="house"
          :text="imovel.quartos"
          :place="imovel.quartos > 1 ? 'Quartos' : 'Quarto'"
        />
        <Chip
          v-if="imovel.banheiros > 0"
          color="black"
          icon="shower"
          :text="imovel.banheiros"
          :place="imovel.banheiros > 1 ? 'Banheiros' : 'Banheiro'"
        />
      </div>
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
  <div class="container-meio">
    <div class="informacoes-contato">
      <q-btn
        color="blue"
        round
        :href="emailLink"
        target="_blank"
        icon="email"
        class="q-mr-lg"
      />
      <span class="q-mr-md"> tegsue@bol.com.br </span>

      <q-btn
        color="green"
        round
        :href="whatsappLink"
        target="_blank"
        icon="fa-brands fa-whatsapp"
        class="q-mr-md"
      />
      <span class="q-mr-md"> +55(88)77665-54424 </span>
    </div>
  </div>
</template>

<script>
import ImovelCarrousel from "src/components/ImgCarrousel.vue";
import ImoveisService from "src/api-mock/mockApi.js";
import Chip from "src/components/InfoChip.vue";

export default {
  components: { ImovelCarrousel, Chip },

  computed: {
    imovelId() {
      return this.$route.params.id;
    },

    whatsappLink() {
      const phoneNumber = "SEU_NUMERO_DE_TELEFONE";
      return `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    },

    emailLink() {
      const Email = "SEU_NUMERO_DE_TELEFONE";
      return `https://api.whatsapp.com/send?phone=${Email}`;
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

.chips {
  text-align: center;
}
.container-meio {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 1024px) {
  .container-superior {
    flex-direction: row;
    align-items: flex-start;
  }

  .container-meio {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .carrousel-img {
    flex: 1;
    margin-bottom: 20px;
  }

  .descricao-imovel {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
