<template>
    <div class="flex justify-around">
        <Profile v-for="person in people" :key="person.id" :person="person"/>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Norman',
          imageSrc: 'norman.jpg',
          videoUrl: 'norman.mp4',
        },
        {
          id: 2,
          name: 'Björn',
          imageSrc: 'bjoern.jpg',
          videoUrl: 'bjoern.mp4',
        },
      ],
    };
  },
};
</script>
