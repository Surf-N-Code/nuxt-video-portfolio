<template>
  <div
    class="relative rounded-lg overflow-hidden shadow-xl my-2 bg-white mt-8 mx-8"
    style="width: 320px"
  >
    <svg
      v-show="showVideo"
      @click="stopVideo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="absolute top-2 right-2 fill-current text-pink-500 w-8 h-8 z-50 cursor-pointer"
    >
      <path
        class="secondary"
        fill-rule="evenodd"
        d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
      />
    </svg>
    <button
      @click="stopVideo"
      v-show="showVideo || showImageslider"
      class="fixed w-full h-full bg-black transition-all opacity-80 inset-0 z-10"
    ></button>
    <div class="z-10">
      <div
        class="relative"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px))"
      >
        <img
          class="w-80"
          :src="require(`~/assets/img/${person.imageSrc}`)"
          :alt="person.name"
        />
      </div>
      <div
        class="relative flex justify-center items-center flex-row px-6 -mt-14"
      >
        <button
          class="p-4 bg-green-400 rounded-full hover:bg-pink-400 focus:bg-ping-600 transition ease-in duration-200 focus:outline-none"
          @click="setVideo"
          v-show="person.videoUrl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current text-white"
          >
            <path
              class="secondary"
              d="M13.59 12l6.7-6.7A1 1 0 0 1 22 6v12a1 1 0 0 1-1.7.7L13.58 12z"
            />
            <rect width="14" height="14" x="2" y="5" class="primary" rx="2" />
          </svg>
        </button>

        <button
          v-show="person.imageFolder"
          class="p-4 bg-green-400 rounded-full hover:bg-pink-400 focus:bg-ping-600 transition ease-in duration-200 focus:outline-none"
          @click="toggleImageSlider"
          v-bind:class="{ 'ml-4': person.videoUrl }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-current text-white"
          >
            <path
              class="primary"
              d="M6.59 6l2.7-2.7A1 1 0 0 1 10 3h4a1 1 0 0 1 .7.3L17.42 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2.59zM19 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7 8a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
            />
            <path class="secondary" d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </button>
      </div>
      <div class="pt-6 pb-8 text-gray-600 font-bold text-center text-2xl">
        {{ person.name }}
      </div>
    </div>
    <div
      v-show="showVideo"
      class="absolute flex flex-column items-center justify-center w-full h-full top-0 bg-black z-20"
    >
      <video controls ref="myVideo">
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div
      class="fixed w-full h-full inset-0 z-50"
      v-if="(person.imageFolder || false) && showImageslider"
    >
      <ImageSliderAwesome :person="person" v-on:close-image-slider="toggleImageSlider"/> 
      <!-- <ImageSlider :person="person" v-on:close-image-slider="toggleImageSlider"/> -->
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
    stopVideo() {
      this.videoUrl = null;
      this.showVideo = false;
    },
    toggleImageSlider() {
      console.log('toggleImageSlider');
      this.showImageslider = !this.showImageslider;
    },
  },
  data() {
    return {
      videoUrl: null,
      showVideo: false,
      showImageslider: false,
    };
  },
  watch: {
    showVideo() {
      const video = this.$refs.myVideo;
      if (video) {
        video.src = this.videoUrl;
        video.play();
      }
    },
  },
};
</script>
