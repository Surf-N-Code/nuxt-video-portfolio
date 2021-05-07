<template>
  <div class="s-w flex justify-center items-center w-full h-full relative" v-if="this.images.length > 0">
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
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="image, i in images" :key="i">
        <img :src="image" class="rounded-lg px-8 m-auto"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'carrousel',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
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
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false)
  },
  methods: {
     closeSlider() {
      this.$emit('close-image-slider');
    }
  }
}
</script>

<style>
.swiper-wrapper {
  align-items: center;
}
</style>