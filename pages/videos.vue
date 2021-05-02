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
          videoUrl: '',
        },
        {
          name: 'Annemarie & Bernd',
          imageSrc: 'annemarie-bernd.jpg',
          videoUrl: '',
        },
        {
          name: 'Basti',
          imageSrc: 'basti.jpg',
          videoUrl: '',
        },
        {
          name: 'Christian',
          imageSrc: 'christian.jpg',
          videoUrl: '',
        },
        {
          name: 'Claire & Carsten',
          imageSrc: 'claire-carsten.jpg',
          videoUrl: '',
        },
        {
          name: 'Florian & Gloria',
          imageSrc: 'florian.jpg',
          videoUrl: '',
          imageFolder: 'florian',
        },
        {
          name: 'Die Göttinger',
          imageSrc: 'goettinger.jpg',
          videoUrl: '',
        },
        {
          name: 'Henning & Gucci',
          imageSrc: 'henning.jpg',
          videoUrl: '',
        },
        {
          name: 'Inga Steffen',
          imageSrc: 'inga-steffen.jpg',
          videoUrl: '',
        },
        {
          name: 'Jan & Jessi',
          imageSrc: 'jan.jpg',
          videoUrl: '',
        },
        {
          name: 'Jens',
          imageSrc: 'jens.jpg',
          videoUrl: '',
        },
        {
          name: 'Jörg',
          imageSrc: 'joerg.jpg',
          videoUrl: '',
        },
        {
          name: 'Jonathan',
          imageSrc: 'jonathan.jpg',
          videoUrl: '',
        },
        {
          name: 'Julia',
          imageSrc: 'julia.jpg',
          videoUrl: '',
        },
        {
          name: 'Kandzi',
          imageSrc: 'kandzi.jpg',
          videoUrl: '',
        },
        {
          name: 'Kay',
          imageSrc: 'kay.jpg',
          videoUrl: '',
        },
        {
          name: 'Lance',
          imageSrc: 'lance.jpg',
          videoUrl: '',
          imageFolder: 'lance',
        },
        {
          name: 'Leander',
          imageSrc: 'leander.jpg',
          videoUrl: '',
        },
        {
          name: 'Mareike & Alfons',
          imageSrc: 'mareike-alfons.jpg',
          videoUrl: '',
        },
        {
          name: 'Martin & Franzi',
          imageSrc: 'martin.jpg',
          videoUrl: '',
        },
        {
          name: 'Mäx',
          imageSrc: 'max-h.jpg',
          videoUrl: '',
        },
        {
          name: 'Max',
          imageSrc: 'max.jpg',
          videoUrl: '',
        },
        {
          name: 'Phini & Robert',
          imageSrc: 'phini.jpg',
          videoUrl: '',
        },
        {
          name: 'Puma',
          imageSrc: 'puma.jpg',
          videoUrl: '',
        },
        {
          name: 'Reiner',
          imageSrc: 'reiner.jpg',
          videoUrl: '',
        },
        {
          name: 'Rieke, Alex & Toni',
          imageSrc: 'rieke-alex-toni.jpg',
          videoUrl: '',
        },
        {
          name: 'Sarah & Julius',
          imageSrc: 'sarah-julius.jpg',
          videoUrl: '',
        },
        {
          name: 'Serkan',
          imageSrc: 'serkan.jpg',
          videoUrl: '',
        },
        {
          name: 'Silke, Martin, Sven & Nadine',
          imageSrc: 'silke-martin-sven-nadine.jpg',
          videoUrl: '',
        },
        {
          name: 'Sina & Max',
          imageSrc: 'sina-max.jpg',
          videoUrl: '',
        },
        {
          name: 'Sonja, Frank, Fiete & Jannes',
          imageSrc: 'sonja-frank-fiete-jannes.jpg',
          videoUrl: '',
        },
        {
          name: 'Sophia, David, Lion & Louis',
          imageSrc: 'sophia-david-lion-louis.jpg',
          videoUrl: '',
        },
        {
          name: 'Stammtisch',
          imageSrc: 'stammtisch.jpg',
          videoUrl: '',
        },
        {
          name: 'Thilo',
          imageSrc: 'thilo.jpg',
          videoUrl: '',
        },
        {
          name: 'Toppa',
          imageSrc: 'toppa.jpg',
          videoUrl: '',
        },
      ],
    };
  },
};
</script>
