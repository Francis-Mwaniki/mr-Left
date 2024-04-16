<template>
  <button @click="scrollToTop" class="scroll-to-top rounded-full bg-white">
    <Icon name="ic:sharp-keyboard-arrow-up" class="h-7 w-7 text-black" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      scrollThreshold: 0,
      showScrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  watch: {
    scrollThreshold: function () {
      if (this.scrollThreshold > 100) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }
    },
  },
};
</script>

<style>
.scroll-to-top {
  position: fixed;
  bottom: 5%;
  right: 30px;
  padding: 10px;
  border: 1px solid #dd6b20;
  color: #fff;
  cursor: pointer;
}
</style>
