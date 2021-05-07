<template>
  <div class="swiper-lazy-box">
    <img class="swiper-lazy" :src="source" :data-src="src" ref="imgEle">
  </div>
</template>

<script>
  export default {
    name: 'lazyLoadedImage',
    props: {
      src: String
    },
    updated() {
      this.$refs.imgEle.src = this.src
    }
  }
</script>