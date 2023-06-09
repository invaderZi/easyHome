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
        push
      />
      <span class="q-mr-md"> {{ imovel.anunciante.email }} </span>

      <q-btn
        color="green"
        round
        :href="whatsappLink"
        target="_blank"
        icon="fa-brands fa-whatsapp"
        class="q-mr-md"
        push
      />
      <span class="q-mr-md"> +55(88)77665-54424 </span>
    </div>
  </div>
  <div class="map-container">
    <MapLocation :address="imovel.endereco" />
  </div>
</template>

<script>
import ImovelCarrousel from "src/components/ImgCarrousel.vue";
import ImoveisService from "src/api-mock/mockApi.js";
import Chip from "src/components/InfoChip.vue";
import MapLocation from "../components/MapLocation.vue";

export default {
  components: { ImovelCarrousel, Chip, MapLocation },
  computed: {
    imovelId() {
      return this.$route.params.id;
    },

    whatsappLink() {
      const phoneNumber = "SEU_NUMERO_DE_TELEFONE";
      return `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    },

    emailLink() {
      let email = this.imovel.anunciante.email;
      let subject = "Contato Imovel" + this.imovel.title;
      let body =
        "Olá gostaria de falar sobre o imovel: " +
        this.imovel.title +
        ", " +
        "anunciado no EasyHome.";

      let encodedEmail = encodeURIComponent(email);
      let encodedSubject = encodeURIComponent(subject);
      let encodedBody = encodeURIComponent(body);

      return `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    },
  },
  data() {
    return {
      imovel: {
        id: "",
        title: "",
        endereco: "",
        description: "",
        value: "",
        type: "",
        city: "",
        state: "",
        zipCode: "",
        quartos: "",
        banheiros: "",
        images: [],
        anunciante: {
          email: "",
          nome: "",
          tel: "",
        },
      },
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
.map-container {
  margin: 30px auto;
  width: 320px;
  height: 200px;
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

  .map-container {
    margin: 30px auto;
    width: 480px;
    height: 240px;
  }
}
</style>
