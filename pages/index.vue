<template>
  <div>
    <div
      class="flex justify-between align-center w-full py-8 text-4xl border-b-2 border-pink-400 text-pink-200 font-bold shadow"
    >
      <img
        src="../assets/icon/minivan.svg"
        class="flex self-center ml-8 w-10 h-10 md:w-20 md:h-20"
      />
      <div class="text-pink-100 text-xl md:text-4xl" style="line-height: 2.7">
        Betti & Chrissi - a Lovestory
      </div>
      <img
        src="../assets/icon/heart.svg"
        class="flex self-center mr-8 w-8 h-8 md:w-12 md:h-12"
      />
    </div>
    <!-- <ImageSliderAwesome /> -->
    <div class="flex flex-wrap justify-around">
      <Profile v-for="(person, i) in people" :key="i" :person="person" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      people: [
        {
          name: 'Arno, Yvonne, Kolja & Juri',
          imageSrc: 'arno.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Arno.mp4',
        },
        {
          name: 'Anne',
          imageSrc: 'anne.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Anne.mp4',
        },
        {
          name: 'Annemarie & Bernd',
          imageSrc: 'annemarie-bernd.jpg',
          videoUrl:
            'https://diltheymedia.com/pingu-roar/Video_Annemarie-Bernd.mp4',
        },
        {
          name: 'Bene',
          imageSrc: 'bene.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Bene.mp4',
        },
        {
          name: 'Björn',
          imageSrc: 'bjoern.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Bjoern.mp4',
        },
        {
          name: 'Basti',
          imageSrc: 'basti.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Basti.mp4',
        },
        {
          name: 'Christian',
          imageSrc: 'christian.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Christian.mp4',
        },
        {
          name: 'Claire & Carsten',
          imageSrc: 'claire-carsten.jpg',
          videoUrl:
            'https://diltheymedia.com/pingu-roar/Video_Claire_Carsten.mp4',
        },
        {
          name: 'Florian & Gloria',
          imageSrc: 'florian.jpg',
          imageFolder: 'florian',
          lastImageId: 2,
        },
        {
          name: 'Die Göttinger',
          imageSrc: 'goettinger.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Goettinger.mp4',
        },
        {
          name: 'Doro & Markus',
          imageSrc: 'doro-markus.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Doro_Markus.mp4',
        },
        {
          name: 'Nora & Henning',
          imageSrc: 'henning.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Henning.mp4',
        },
        {
          name: 'Inga Stefan',
          imageSrc: 'inga-steffen.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video-Inga-Stefan.mp4',
        },
        {
          name: 'Jan & Jessi',
          imageSrc: 'jan.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Jan.mp4',
        },
        {
          name: 'Jessie',
          imageSrc: 'jessie.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Jessie.mp4',
        },
        {
          name: 'Jens',
          imageSrc: 'jens.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Christian.mp4',
        },
        {
          name: 'Jörg',
          imageSrc: 'joerg.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Joerg.mp4',
        },
        {
          name: 'Jonathan',
          imageSrc: 'jonathan.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Jonathan.mp4',
        },
        {
          name: 'Julia',
          imageSrc: 'julia.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Julia.mp4',
        },
        {
          name: 'Nicole & Kandzi',
          imageSrc: 'kandzi.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Kandzi.mp4',
        },
        {
          name: 'Kay',
          imageSrc: 'kay.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Kay.mp4',
        },
        {
          name: 'Lance',
          imageSrc: 'lance.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Lance.mp4',
        },
        {
          name: 'Leander',
          imageSrc: 'leander.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Leander.mp4',
        },
        {
          name: 'Mareike & Alfons',
          imageSrc: 'mareike-alfons.jpg',
          videoUrl:
            'https://diltheymedia.com/pingu-roar/Video_Mareike-Alfons.mp4',
        },
        {
          name: 'Martin & Franzi',
          imageSrc: 'martin.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Martin.mp4',
        },
        {
          name: 'Mäx',
          imageSrc: 'max-h.jpg',
          imageFolder: 'max',
          lastImageId: 5
        },
        {
          name: 'Luis & Max',
          imageSrc: 'max.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Max.mp4',
        },
        {
          name: 'Silva & Norman',
          imageSrc: 'norman.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Norman.mp4',
        },
        {
          name: 'Phini & Robert',
          imageSrc: 'phini.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Phini.mp4',
        },
        {
          name: 'Puma',
          imageSrc: 'puma.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Puma.mp4',
        },
        {
          name: 'Reiner',
          imageSrc: 'reiner.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Reiner.mp4',
        },
        {
          name: 'Rieke, Alex & Toni',
          imageSrc: 'rieke-alex-toni.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Rieke-Alex.mp4',
        },
        {
          name: 'Sandra & Gucci',
          imageSrc: 'gucci.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Henning.mp4',
        },
        {
          name: 'Sarah & Julius',
          imageSrc: 'sarah-julius.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Julius.mp4',
        },
        {
          name: 'Serkan',
          imageSrc: 'serkan.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Serkan.mp4',
        },
        {
          name: 'Silke, Martin, Sven & Nadine',
          imageSrc: 'silke-martin-sven-nadine.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Silke.mp4',
        },
        {
          name: 'Sina & Max',
          imageSrc: 'sina-max.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Sina-Max.mp4',
        },
        {
          name: 'Sonja, Frank, Fiete & Jannes',
          imageSrc: 'sonja-frank-fiete-jannes.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Sonja.mp4',
        },
        {
          name: 'Sophia, David, Lion & Louis',
          imageSrc: 'sophia-david-lion-louis.jpg',
          videoUrl: '',
          imageFolder: 'sophia',
          lastImageId: 7
        },
        {
          name: 'Stammtisch',
          imageSrc: 'stammtisch.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Stammtisch.mp4',
        },
        {
          name: 'Stratti',
          imageSrc: 'stratti.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Thilo_Stratti.mp4',
        },
        {
          name: 'Thilo',
          imageSrc: 'thilo.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Thilo_Stratti.mp4',
        },
        {
          name: 'Toppa',
          imageSrc: 'toppa.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Puma.mp4',
        },
        {
          name: 'Sarah & Vivi',
          imageSrc: 'sarah-vivi.jpg',
          videoUrl: 'https://diltheymedia.com/pingu-roar/Video_Vivian-Sarah.mp4',
        },
      ],
    };
  },
};
</script>
