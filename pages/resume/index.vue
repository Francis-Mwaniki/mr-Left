<template>
  <UCard>
    <!-- hide controllers -->
    <iframe
      src="https://res.cloudinary.com/dunssu2gi/image/upload/v1714392077/zgmk7xjxegvrssqbhew2.pdf"
      class="w-full min-h-screen cv-frame"
    ></iframe>
  </UCard>
</template>

<script>
export default {
  // Your component logic here
};
</script>
<style scoped>
.cv-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.cv-iframe::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.cv-iframe {
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer, Edge */
}
</style>
