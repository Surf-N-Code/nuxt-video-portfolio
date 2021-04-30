<template>
   <div class="relative rounded-lg overflow-hidden shadow-xl my-2 bg-white">
      <button @click="setVideo" v-show="showVideo" class="fixed w-full h-full bg-black transition-all opacity-50 inset-0 z-40"></button>
      <div class="z-10">
         <div
               class="relative"
               style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));">
            <img class="w-80" :src="require(`~/assets/img/${person.imageSrc}`)" :alt="person.name" />
         </div>
         <div class="relative flex justify-center items-center flex-row px-6 -mt-14">
            <button
               class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
               @click="setVideo"
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current text-white"><path class="secondary" d="M13.59 12l6.7-6.7A1 1 0 0 1 22 6v12a1 1 0 0 1-1.7.7L13.58 12z"/><rect width="14" height="14" x="2" y="5" class="primary" rx="2"/></svg>
            </button>
         </div>
         <div class="pt-6 pb-8 text-gray-600 text-center text-2xl">{{person.name}}</div>
      </div>
      <div
            v-show="showVideo"
            class="absolute flex flex-column items-center justify-center w-full h-full top-0 bg-black z-50">
         <video controls ref="myVideo">
            <source src="" type="video/mp4">
            Your browser does not support the video tag.
         </video>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: {
      type: Object,
    },
  },
  methods: {
    setVideo() {
      this.videoUrl = this.person.videoUrl;
      this.showVideo = !this.showVideo;
    },
  },
  data() {
    return {
      videoUrl: null,
      showVideo: false,
    };
  },
  watch: {
    showVideo() {
      const video = this.$refs.myVideo;
      if (video) {
        video.src = require(`~/assets/video/${this.videoUrl}`);
        video.play();
      }
    },
  },
};
</script>
