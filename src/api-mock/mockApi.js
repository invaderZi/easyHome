export default {
  getImovelById(id) {
    let imovel = this.getImovelList(12345).find((obj) => {
      return obj.id == id;
    });
    return imovel;
  },

  getImovelList(idUser) {
    return [
      {
        id: 1,
        title: "casa pra alugar",
        description:
          "descricao da casa psudsk sojadfn sofnoidsnf 0fjoids fi ndsjfbiu dsnfjon dsijfnioadsn fio",
        value: "676,00",
        type: "aluguel",
        city: "jp",
        state: "pb",
        zipCode: "58053170",
        images: [
          {
            id: 1,
            source:
              "https://media.imoveis-sc.com.br/media/pad-760-580-000/indaial-casa-joaopauloii-1190394-0-63d3813b41bd51492297667.jpg",
            description: "frente da casa",
          },
          {
            id: 2,
            source:
              "https://media.imoveis-sc.com.br/media/pad-760-580-000/indaial-casa-joaopauloii-1190394-3-63d3813b41bdc421036970.jpg",
            description: "lateral da casa",
          },
          {
            id: 3,
            source:
              "https://media.imoveis-sc.com.br/media/pad-760-580-000/indaial-casa-joaopauloii-1190394-11-63d3813b41beb1200424641.jpg",
            description: "dentro da casa",
          },
        ],
      },
    ];
  },
};
