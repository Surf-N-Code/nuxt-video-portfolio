<template>
    <div>
      <div class="flex justify-between align-center w-full py-8 text-4xl border-b-2 border-pink-400 text-pink-200 font-bold shadow">
        <img src="../assets/img/minivan.svg" class="flex self-center ml-8 w-20 h-20"/>
        <div class="text-pink-100" style="line-height: 2.5">
          Betti & Chrissi - a Lovestory
        </div>
        <img src="../assets/img/heart.svg" class="flex self-center mr-8 w-12 h-12"/>
      </div>
      <div class="flex justify-around mt-16">
        <Profile v-for="person in people" :key="person.id" :person="person"/>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Basti',
          imageSrc: 'basti.jpg',
          videoUrl: 'q6pzojPCOpE',
          images: true,
        },
        {
          id: 2,
          name: 'Björn',
          imageSrc: 'bjoern.jpg',
          videoUrl: 'Kqk1nilSSig',
        },
        {
          id: 3,
          name: 'Tester',
          imageSrc: 'bjoern.jpg',
          videoUrl: 'Kqk1nilSSig',
        },
        {
          id: 4,
          name: 'Axel',
          imageSrc: 'bjoern.jpg',
          videoUrl: 'Kqk1nilSSig',
        },
      ],
    };
  },
};
</script>
