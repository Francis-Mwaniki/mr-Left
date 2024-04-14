<template>
  <div>
    <LoadingPage v-if="loading" />
    <div v-if="!loading" class="dark:bg-slate-900 bg-gray-100 min-h-screen">
      <Navigation />
      <div class="dark:bg-slate-900 bg-gray-100 min-h-screen ease-zoom-in">
        <NuxtPage />
      </div>
      <ScrollToTop />
      <ProgressBar />
    </div>
  </div>
</template>
<script>
// import NavLayout from "~/components/Navigation/NavLayout.vue";
import LoadingPage from "~/components/loading.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";
import ProgressBar from "./components/progressBar.vue";

export default {
  components: {
    LoadingPage,
    ScrollToTop,
    ProgressBar,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

p,
i,
span,
div,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}
.v-font {
  font-family: "Satisfy", cursive;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.ease-zoom-in {
  animation: zoom-in 0.5s;
}

.ease-zoom-out {
  animation: zoom-out 0.5s;
}

@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
