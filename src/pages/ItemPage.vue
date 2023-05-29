<template>
  <div>
    <item-carrousel :items="items"> </item-carrousel>
  </div>
</template>
<script>
import ItemCarrousel from "src/components/ItemCarrousel.vue";

export default {
  components: { ItemCarrousel },
  data() {
    return {
      items: [
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
        },
      ],
    };
  },
};
</script>
