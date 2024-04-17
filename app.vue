<template>
  <div class="dark:bg-slate-900 bg-gray-100 min-h-screen ease-zoom-in overflow-x-hidden">
    <LoadingPage v-if="loading" />
    <div>
      <div class="flex justify-start items-center gap-x-3 mt-3">
        <NavLayout />
      </div>
      <NuxtPage page-key="static" />
      <!-- create by francis -->
      <footer
        class="dark:text-white text-center text-xs p-3 w-full smooth overflow-hidden"
      >
        <div class="flex justify-center items-center gap-x-2">
          <div class="flex justify-center items-center gap-x-2 smooth">
            <Icon name="akar-icons:github-fill" class="h-6 w-6" />
            <a
              href="https://github.com/Francis-Mwaniki"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-gray-400"
            >
              <span>Francis Mwaniki</span>
            </a>
          </div>
        </div>
      </footer>
      <ProgressBar />
      <ScrollToTop />
    </div>
  </div>
</template>
<script>
import NavLayout from "~/components/Navigation.vue";
import LoadingPage from "~/components/loading.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";
import ProgressBar from "./components/progressBar.vue";

export default {
  components: {
    LoadingPage,
    ScrollToTop,
    ProgressBar,
    NavLayout,
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
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

p,
i,
span,
div,
h4,
h5,
h6 {
  font-family: "Montserrat";
  font-weight: 400;
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
