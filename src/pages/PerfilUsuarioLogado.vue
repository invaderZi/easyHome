<template>
  <div class="profile-container">
    <div class="avatar-container">
      <img
        v-if="avatar.length"
        :src="avatar"
        class="avatar"
        @click="openFileExplorer"
        alt="user profile picture"
      />

      <q-avatar
        v-else
        size="xl"
        color="black"
        text-color="white"
        font-size="60px"
        icon="person"
        @click="openFileExplorer"
        class="avatar"
        rounded
      />
    </div>
    <div class="info-container">
      <div class="info-item">
        <span class="info-label">Nome:</span>
        <span class="info-value">{{ name }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Email:</span>
        <span class="info-value">{{ email }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Telefone:</span>
        <span class="info-value">{{ phone }}</span>
      </div>
      <div class="info-item">
        <span class="info-label">CPF:</span>
        <span class="info-value">{{ cpf }}</span>
      </div>
    </div>
  </div>
  <!-- Sessão da galeria de imagens -->
  <div class="favoritos">
    <p><b> Favoritos Salvos </b></p>
  </div>

  <div class="gallery-container">
    <div
      v-for="(item, index) in galleryItems"
      :key="index"
      class="gallery-item"
      @click="verAnuncio(item.id)"
    >
      <q-img
        :src="item.src"
        class="gallery-image"
        alt="Imagem do anúncio"
        ratio="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dados perfil

      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      cpf: "123.456.789-00",
      avatar: "", // URL da imagem do avatar
      galleryItems: [
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/bed49242aa7cf00e18b0e4b971fd8d4c/apartamento-com-4-quartos-para-alugar-216m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          id: 1,
        },
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/8dc0018fef1cf76120e91aa127bf835c/apartamento-com-5-quartos-para-alugar-224m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          id: 2,
        },
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/938bc312056322dc632992f1a7e58e1f/apartamento-com-4-quartos-para-alugar-220m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          id: 3,
        },
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/bed49242aa7cf00e18b0e4b971fd8d4c/apartamento-com-4-quartos-para-alugar-216m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          id: 4,
        },
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/8dc0018fef1cf76120e91aa127bf835c/apartamento-com-5-quartos-para-alugar-224m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          link: 5,
        },
        {
          src: "https://resizedimgs.zapimoveis.com.br/crop/420x236/named.images.sp/938bc312056322dc632992f1a7e58e1f/apartamento-com-4-quartos-para-alugar-220m-no-altiplano-cabo-branco-joao-pessoa.jpg",
          link: 6,
        },
      ],

      //obj upload

      objUpload: {
        foto: "",
      },
    };
  },
  methods: {
    openFileExplorer() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
          // A imagem foi carregada com sucesso
          const imageDataURL = readerEvent.target.result;
          this.avatar = imageDataURL; // Exibir a imagem carregada como avatar

          // Salvar a imagem pronta para envio na variável "fotoUpload"
          this.objUpload.foto = file;
        };

        reader.readAsDataURL(file);
      };

      input.click();
    },

    verAnuncio(id) {
      this.$router.push("/imovel/" + id);
    },
  },
};
</script>

<style scoped>
.profile-container {
  padding: 14px;
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 10px auto;
}

.avatar-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.avatar-container > * {
  border: 4px solid rgb(22, 21, 21);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}

.info-container {
  padding: 10px;
}

.info-item {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bolder;
  color: black;
}

.info-value {
  margin-left: 5px;
}

.favoritos {
  margin: 0 auto;
  max-width: 80%;
  padding-left: 20px;
}

.gallery-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
}

.gallery-item {
  width: calc(33.3% - 20px);
  margin: 10px;
  cursor: pointer;
}

.gallery-image {
  width: 100%;
  height: auto;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .gallery-item {
    width: calc(100% - 20px);
  }
}
</style>
