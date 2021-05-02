<template>
    <div>
      <div class="flex justify-between align-center w-full py-8 text-4xl border-b-2 border-pink-400 text-pink-200 font-bold shadow">
        <img src="../assets/icon/minivan.svg" class="flex self-center ml-8 w-10 h-10 md:w-20 md:h-20"/>
        <div class="text-pink-100 text-xl md:text-4xl" style="line-height: 2.7">
          Betti & Chrissi - a Lovestory
        </div>
        <img src="../assets/icon/heart.svg" class="flex self-center mr-8 w-8 h-8 md:w-12 md:h-12"/>
      </div>
      <div class="flex flex-wrap justify-around">
        <Profile v-for="(person, i) in people" :key="i" :person="person"/>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      people: [
        {
          name: 'Anne',
          imageSrc: 'anne.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Annemarie & Bernd',
          imageSrc: 'annemarie-bernd.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Basti',
          imageSrc: 'basti.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Christian',
          imageSrc: 'christian.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Claire & Carsten',
          imageSrc: 'claire-carsten.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Florian & Gloria',
          imageSrc: 'florian.jpg',
          videoUrl: 'RDiLt_Kc5lw',
          imageFolder: 'florian',
        },
        {
          name: 'Die Göttinger',
          imageSrc: 'goettinger.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Sandra, Nora, Gucci & Henning',
          imageSrc: 'henning.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Inga Steffen',
          imageSrc: 'inga-steffen.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Jan & Jessi',
          imageSrc: 'jan.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Jens',
          imageSrc: 'jens.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Jörg',
          imageSrc: 'joerg.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Jonathan',
          imageSrc: 'jonathan.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Julia',
          imageSrc: 'julia.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Kandzi',
          imageSrc: 'kandzi.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Kay',
          imageSrc: 'kay.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Lance',
          imageSrc: 'lance.jpg',
          videoUrl: 'RDiLt_Kc5lw',
          imageFolder: 'lance',
        },
        {
          name: 'Leander',
          imageSrc: 'leander.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Mareike & Alfons',
          imageSrc: 'mareike-alfons.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Martin & Franzi',
          imageSrc: 'martin.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Mäx',
          imageSrc: 'max-h.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Max',
          imageSrc: 'max.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Phini & Robert',
          imageSrc: 'phini.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Puma',
          imageSrc: 'puma.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Reiner',
          imageSrc: 'reiner.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Rieke, Alex & Toni',
          imageSrc: 'rieke-alex-toni.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Sarah & Julius',
          imageSrc: 'sarah-julius.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Serkan',
          imageSrc: 'serkan.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Silke, Martin, Sven & Nadine',
          imageSrc: 'silke-martin-sven-nadine.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Sina & Max',
          imageSrc: 'sina-max.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Sonja, Frank, Fiete & Jannes',
          imageSrc: 'sonja-frank-fiete-jannes.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Sophia, David, Lion & Louis',
          imageSrc: 'sophia-david-lion-louis.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Stammtisch',
          imageSrc: 'stammtisch.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Thilo',
          imageSrc: 'thilo.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
        {
          name: 'Toppa',
          imageSrc: 'toppa.jpg',
          videoUrl: 'RDiLt_Kc5lw',
        },
      ],
    };
  },
};
</script>
