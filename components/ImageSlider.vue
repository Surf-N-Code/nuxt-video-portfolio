<template>
  <div class="relative" v-if="this.images.length > 0">
    <svg
      @click="closeSlider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="fixed top-2 right-2 fill-current text-white w-20 h-20 z-50 cursor-pointer"
    >
      <path
        class="secondary"
        fill-rule="evenodd"
        d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
      />
    </svg>
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" class="rounded-md"/>
      <img :src="nextUpImage" class="rounded-md hidden"/>
    </div>
    <a class="prev cursor-pointer fixed text-white" @click="prev" href="#"
      >&#10094; <span class="hidden md:block">Previous</span></a
    >
    <a class="next cursor-pointer fixed text-white" @click="next" href="#"
      > <span class="hidden md:block">Next</span> &#10095;</a
    >
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    person: {
      type: Object,
    },
  },
  data() {
    let images = [];
    if (this.person?.lastImageId) {
      images = [...Array(this.person.lastImageId + 1).keys()].map(
        (v) => `https://diltheymedia.com/pingu-roar/img/${this.person.imageFolder}/${v}.jpg`,
      );
    }
    return {
      images,
      timer: null,
      currentIndex: 0,
    };
  },

  mounted() {
    this.startSlide();
  },

  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
      clearInterval(this.timer);
      this.startSlide();
    },
    prev() {
      this.currentIndex -= 1;
      clearInterval(this.timer);
      this.startSlide();
    },
    closeSlider() {
      this.$emit('close-image-slider');
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    nextUpImage() {
      const currentImageIndex = Math.abs(this.currentIndex) % this.images.length;
      const nextUpImage = this.images[currentImageIndex + 1] || this.images[0];
      return nextUpImage;
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100vw;
  height: auto;
}

.prev,
.next {
  top: 50%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 22px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
