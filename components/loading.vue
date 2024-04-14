<template>
  <div v-if="isLoading" class="loading-page bg-[#ffffff] dark:bg-slate-900">
    <div class="ThreeDottedIndicator"></div>
    <!-- You can add a message or additional content here -->
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Initially set to true to simulate loading
    };
  },
  mounted() {
    // Simulate loading delay (You can replace this with actual loading logic)
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000); // Adjust the time as needed
  },
};
</script>

<style>
/* Style your loading page */
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; /* Ensure it appears above other content */
}

/* Add a 3-dotted loading indicator */
.ThreeDottedIndicator {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.ThreeDottedIndicator:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid orange;
  border-color: orange transparent orange transparent;
  animation: ThreeDots 1.2s linear infinite;
}

@keyframes ThreeDots {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
