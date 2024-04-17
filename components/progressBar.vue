<template>
  <div class="progress-container">
    <div
      class="progress-bar flex justify-center items-center gap-x-2 smooth"
      :style="{ height: progressBarHeight }"
    >
      <!--  -->
      {{ progressBarHeight === "100%" ? "🎉" : null }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressBarHeight: "0%", // Initial height of the progress bar
    };
  },
  methods: {
    updateProgressBar() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollableHeight) * 100;
      this.progressBarHeight = `${scrolled}%`;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgressBar);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateProgressBar);
  },
};
</script>

<style>
/* Style your progress container as desired */
.progress-container {
  position: fixed;
  bottom: 5%;
  right: 1px;
  width: 50px;
  height: 50px; /* Adjust as needed */
  border-radius: 50%; /* Make it a circle */
  background-color: #fff; /* Change color as desired */
  border: 2px solid #dd6b20; /* Set border properties */
  z-index: 9999; /* Ensure it appears above other content */
  overflow: hidden; /* Hide the overflowing part of the border */
}

/* Style your progress bar as desired */
.progress-bar {
  width: 100%;
  /* Change color orange bg-orange-300*/
  background-color: #da8d5a; /* Set the color of the progress bar */
  transition: height 0.3s ease; /* Add a smooth transition effect */
}
</style>
