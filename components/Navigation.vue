<template>
  <div>
    <UButton
      @click="toggle"
      class="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium hover:bg-orange-800 hover:ring-4 hover:ring-orange-900 hover:opacity-60 transition duration-500 ease-in-out rotate-6 hover:rotate-0 capitalize"
    >
      <span>
        <Icon
          name="material-symbols:view-list"
          class="h-6 w-6 dark:text-black text-white"
        />
      </span>

      <span>Menu</span>
    </UButton>
    <div :class="menuClasses">
      <button
        aria-label="Close"
        class="absolute top-3 right-3 text-5xl dark:text-white cursor-pointer"
        @click="toggle"
      >
        &times;
      </button>

      <div class="container overflow-auto text-base sm:text-3xl">
        <div class="my-4">
          <h1 class="sm:text-5xl dark:text-white font-bold v-font text-4xl text-wrap p-2">
            My Portfolio.
          </h1>
        </div>
        <div class="flex justify-center items-center sm:flex-row flex-col">
          <div class="p-2">
            <NuxtLink @click="open = false" to="/" class="item">
              <UButton
                class="px-5 py-3 min-w-36 font-extrabold hover:bg-orange-800 hover:ring-4 hover:ring-orange-900 hover:opacity-60 rotate-6 hover:rotate-0 transition duration-500 ease-in-out flex mx-auto justify-center items-center capitalize"
              >
                <Icon
                  name="octicon:project-template-16"
                  class="h-6 w-6 dark:text-black text-white"
                />

                <span>Project</span>
                <Icon
                  name="material-symbols:arrow-outward-rounded"
                  class="h-6 w-6 dark:text-black text-white"
                />
              </UButton>
            </NuxtLink>
          </div>
          <div class="p-2">
            <NuxtLink @click="open = false" to="/About" class="item">
              <UButton
                class="px-5 py-3 min-w-36 font-extrabold hover:bg-orange-800 hover:ring-4 hover:ring-orange-900 transition duration-500 ease-in-out hover:opacity-60 rotate-6 hover:rotate-0 flex mx-auto justify-center items-center capitalize"
              >
                <Icon
                  name="material-symbols:android-contacts-outline"
                  class="h-6 w-6 dark:text-black text-white"
                />

                <span>About</span>
                <Icon
                  name="material-symbols:arrow-outward-rounded"
                  class="h-6 w-6 dark:text-black text-white"
                />
              </UButton>
            </NuxtLink>
          </div>
          <div class="p-2">
            <NuxtLink @click="open = false" to="/resume" class="item">
              <UButton
                class="px-5 py-3 min-w-36 font-extrabold hover:bg-orange-800 hover:ring-4 hover:ring-orange-900 hover:opacity-60 transition duration-500 ease-in-out rotate-6 hover:rotate-0 flex mx-auto justify-center items-center capitalize"
              >
                <Icon name="tabler:file-cv" class="h-6 w-6 dark:text-black text-white" />

                <span>Resume</span>
                <Icon
                  name="material-symbols:arrow-outward-rounded"
                  class="h-6 w-6 dark:text-black text-white"
                />
              </UButton>
            </NuxtLink>
          </div>
        </div>

        <div class="p-2">
          <DarkMode />
        </div>

        <!-- i love Both Vue(Nuxt) and React(Nextjs) -->
        <div class="p-2">
          <p class="text-center text-gray-400 text-xs mt-8">
            <span class="text-gray-400 text-xs mt-8 font-extrabold italic"
              >I love both Vue(Nuxt) and React(Nextjs)</span
            >
          </p>
        </div>
        <!-- francis mwaniki copyright c 2024 -->
        <footer class="text-center text-gray-400 text-xs mt-8">
          <p>
            Francis Mwaniki &copy;
            <span v-text="new Date().getFullYear()"></span>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  computed: {
    menuClasses() {
      return {
        menu: true,
        open: this.open,
        close: !this.open,
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

v-font {
  font-family: "Satisfy", cursive;
}
.container {
  position: relative;

  width: 100%;
  text-align: center;
  margin-top: 8rem;
  overflow-y: auto;
}

.item {
  color: #ccc;
  cursor: pointer;
  text-decoration: none;
}

.item:hover {
  color: #fff;
}

.menu {
  overflow-x: hidden;
  overflow-y: auto;
  transition-duration: 700ms;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #fff;
}

.dark .menu {
  background-color: #1f2937;
}

.open {
  height: 100%;
  width: 100%;
}

.close {
  width: 0;
  height: 100%;
}
</style>
