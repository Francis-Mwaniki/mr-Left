<template>
  <div class="dark:bg-slate-800 bg-gray-100 min-h-screen">
    <UCard class="mt-2 dark:bg-slate-900 bg-gray-100">
      <template #header>
        <div class="flex justify-between items-center flex-row">
          <h1 class="text-2xl font-bold v-font">My projects</h1>
          <!-- tabs -->
          <div class="flex space-x-2">
            <div v-for="tab in tabs" :key="tab.name">
              <UButton
                @click="setActiveTab(tab)"
                :class="{
                  'hover:bg-orange-800 ring-4 ring-orange-900 hover:opacity-60 transition duration-500 ease-in-out  capitalize': isTabActive(
                    tab
                  ),
                  'bg-transparent dark:bg-transparent': !isTabActive(tab),
                }"
                class="text-black dark:text-white"
              >
                {{ tab.name }}
              </UButton>
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <div class="mt-3" />

        <i class="text-center text-lg dark:text-white"
          >Click on the image to view more details</i
        >
        <!-- <div>
          <DeReactLayout />
        </div>
        <div>
          <Delayout />
        </div> -->
        <div
          :class="{
            'ease-zoom-in': isReact_Nextjs,
          }"
          v-if="isReact_Nextjs"
        >
          <DeReactLayout />
        </div>
        <div
          :class="{
            'ease-zoom-in': isVue_Nuxtjs,
          }"
          v-if="isVue_Nuxtjs"
        >
          <Delayout />
        </div>
        <div class="mb-3" />
      </template>
      <template #footer>
        <div class="flex justify-end">
          <NuxtLink
            target="__blank"
            class="bg-transparent px-2 text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent ring-1 ring-gray-300 hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md"
            to="https://github.com/Francis-Mwaniki?tab=repositories"
          >
            <Icon name="uil:github" class="mr-2 h-5 w-5" />
            <span>View all on Github</span>
            <Icon name="uil:arrow-right" class="mr-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const tabs = ref([
  { name: "React/Nextjs", isActive: true },
  { name: "Vue/Nuxtjs", isActive: false },
]);
const isVue_Nuxtjs = ref(false);
const isReact_Nextjs = ref(true);

const activeTab = ref<{ name: string; isActive: boolean }>(tabs.value[0]);

const setActiveTab = (tab: { name: string; isActive: boolean }) => {
  activeTab.value = tab;
};

const isTabActive = (tab: { name: string; isActive: boolean }) => {
  return tab.name === activeTab.value.name;
};
watchEffect(() => {
  if (activeTab.value.name === "React/Nextjs") {
    isReact_Nextjs.value = true;
    isVue_Nuxtjs.value = false;
  } else {
    isReact_Nextjs.value = false;
    isVue_Nuxtjs.value = true;
  }
});
</script>

<style scoped>
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
