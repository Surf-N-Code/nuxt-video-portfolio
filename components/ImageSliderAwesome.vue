<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/0.jpg" class="rounded-md"/></swiper-slide>
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/1.jpg" class="rounded-md"/></swiper-slide>
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/2.jpg" class="rounded-md"/></swiper-slide>
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/3.jpg" class="rounded-md"/></swiper-slide>
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/4.jpg" class="rounded-md"/></swiper-slide>
    <swiper-slide><img src="https://diltheymedia.com/pingu-roar/img/jan/5.jpg" class="rounded-md"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        spaceBetween: 30,
        lazy: true
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>