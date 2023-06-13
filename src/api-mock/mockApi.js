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
        title: "Aluguel nos Bancarios",
        endereco:
          "Rua joana batista cardoso, 60, jardim sao paulo, joao pessoa, paraiba, brasil",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        value: "676,00",
        condominioIncluso: false,
        valorCondominio: "276,40",
        type: "aluguel",
        city: "jp",
        state: "pb",
        zipCode: "58053170",
        quartos: 3,
        banheiros: 2,
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
        anunciante: {
          email: "email.exmplo@exemplo.com",
          nome: "joao da silva",
          tel: "+5584555566669",
        },
      },
    ];
  },
};
