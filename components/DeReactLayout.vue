<script setup lang="ts">
const items = [
  {
    title: "Nextjs Transcription App",
    description: "I built a transcription app using Nextjs, Tailwindcss and AssemblyAI",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713278340/Screenshot_from_2024-04-16_17-38-41_pgvodk.png",
    link: "https://next-transcriber.vercel.app/",
    logo: "devicon:nextjs",
    github: "https://github.com/Francis-Mwaniki/nextjs-transcriber",
  },
  {
    title: "Procurement Tender App",
    description:
      "I built a procurement tender app using Nextjs, Tailwindcss,Prisma and MongoDB",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277988/Screenshot_from_2024-04-16_17-26-50_yanzfc.png",
    link: "https://main--rubys.netlify.app/",
    logo: "devicon:nextjs",
    github: "private repo but can be shared to recruiter only",
    isPrivate: true,
  },
  {
    title: "Mental Health App",
    description:
      "Mental health app was build using Nextjs,Prisma, Tailwindcss and MongoDB",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277433/Screenshot_from_2024-04-16_17-15-00_q0kpzk.png",
    link: "https://elevateminds-ns.netlify.app/",
    logo: "devicon:nextjs",
    github: "private repo but can be shared to recruiter only",
    isPrivate: true,
  },
  {
    title: "Library Management App",
    description:
      " Library management app was build on top of Nextjs,Prisma, Tailwindcss and Supabase",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277988/Screenshot_from_2024-04-16_17-26-22_wlclun.png",
    link: "https://lib-reminder.vercel.app/",
    logo: "devicon:nextjs",
    github: "private repo but can be shared to recruiter only",
    isPrivate: true,
  },
  {
    title: "Patient Reminder App",
    description:
      " Patient reminder app was build on top of Nextjs,Prisma, Tailwindcss and MongoDB",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277987/Screenshot_from_2024-04-16_17-31-07_atgewr.png",
    link: "https://patient-puce.vercel.app/",
    logo: "devicon:nextjs",
    github: "private repo but can be shared to recruiter only",
    isPrivate: true,
  },
  {
    title: "AI GPT Detector",
    description:
      " AI GPT Detector app was build on top of Nextjs,Prisma, Tailwindcss and MongoDB, Machine Learning",
    image:
      "https://res.cloudinary.com/dzvtkbjhc/image/upload/v1713277987/Screenshot_from_2024-04-16_17-30-50_mob8g0.png",
    link: "https://gpt-detector-beta.vercel.app/",
    logo: "devicon:nextjs",
    github: "private repo but can be shared to recruiter only",
    isPrivate: true,
  },
];
const isOpen = ref(false);
const isClose = ref(false);
const viewerItem = ref<any>({});
const openViewer = (item: any) => {
  viewerItem.value = item;
  console.log(viewerItem.value);
  isOpen.value = true;
};
const closeViewer = () => {
  isClose.value = true;
  setTimeout(() => {
    isOpen.value = false;
    isClose.value = false;
  }, 100);
};
</script>

<template>
  <div>
    <h1 class="text-center m-2 text-3xl font-extrabold">React Projects</h1>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4' }"
      indicators
      class="rounded-lg overflow-hidden"
      arrows
    >
      <UCard class="text-center m-1 dark:bg-slate-950 pb-4">
        <template #header>
          <h1 class="text-lg font-bold v-font">
            {{ item.title }}
          </h1>
        </template>
        <template #default>
          <div class="flex justify-center flex-col">
            <div class="relative group">
              <img
                :src="item.image"
                class="w-full object-cover h-1/2 overflow-hidden dark:filter dark:brightness-75"
              />

              <!-- zoom   hidden group-hover:inline-block inside image-->
              <div
                class="absolute inset-y-0 bottom-0 w-full h-full scale-90 hover:scale-100 shadow-lg backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50 flex items-center justify-center rounded opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <a @click="openViewer(item)" class="cursor-pointer"
                  ><Icon name="ic:round-zoom-out-map" class="h-8 w-8 text-white"
                /></a>
              </div>
            </div>

            <div>
              <div class="flex justify-start items-center mb-4">
                <span class="text-center">Framework used:</span>
                <Icon :name="item.logo" class="h-8 w-8 text-green-500" />
                <!-- <Icon name="uil:nuxtjs" class="h-8 w-8 text-blue-500" /> -->
              </div>

              <div
                class="flex justify-evenly items-center w-full ring-1 dark:ring-gray-600 ring-gray-300 rounded-lg"
              >
                <NuxtLink
                  class="flex-1 flex-grow bg-transparent text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-l"
                  target="__blank"
                  :to="`${item.link}`"
                >
                  <UTooltip
                    text="Preview Live demo"
                    :shortcuts="['⌘', 'O']"
                    :popper="{ arrow: true }"
                  >
                    <Icon name="uil:eye" class="mr-2 h-5 w-5" />
                    <span>Live</span>
                    <Icon
                      name="uil:arrow-right"
                      class="ml-2 h-5 w-5 hidden group-hover:inline-block"
                    />
                  </UTooltip>
                </NuxtLink>

                <!-- separator -->
                <div class="w-0.5 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"></div>

                <NuxtLink
                  class="flex-1 flex-grow bg-transparent text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-r"
                  :to="`${item.isPrivate ? '' : item.github}`"
                  :class="item.isPrivate ? 'cursor-not-allowed' : 'cursor-pointer'"
                >
                  <UTooltip
                    :text="item.isPrivate ? 'This repo is private' : 'Github'"
                    :shortcuts="['⌘', 'O']"
                    :popper="{ arrow: true }"
                  >
                    <Icon name="uil:github" class="mr-2 h-5 w-5" />
                    <span>
                      {{ item.isPrivate ? "Private" : "Github" }}
                    </span>
                    <Icon
                      name="uil:arrow-right"
                      class="ml-2 h-5 w-5 hidden group-hover:inline-block"
                    />
                  </UTooltip>
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </UCard>
    </UCarousel>

    <!-- modal -->
    <div
      v-if="isOpen"
      :class="{
        'zoom-inner': isOpen,
        'zoom-leave': isClose,
      }"
      class="fixed backdrop-filter backdrop-blur-sm shadow-none bg-black inset-0 z-50 bg-opacity-70 flex items-center justify-center"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-lg p-4 sm:w-1/2 w-full overflow-y-auto"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-bold my-3">{{ viewerItem.title }}</h2>
          <button @click="closeViewer" class="text-red-500 dark:text-red-400">
            <Icon name="ic:round-close" class="h-7 w-7" />
          </button>
        </div>
        <img :src="viewerItem.image" class="w-full h-96 object-cover" />
        <p class="text-gray-700 dark:text-gray-300 my-3">{{ viewerItem.description }}</p>
        <div class="mt-4 flex justify-between items-center">
          <div
            class="flex justify-evenly items-center w-full ring-1 dark:ring-gray-600 ring-gray-300 rounded-lg"
          >
            <NuxtLink
              class="flex-1 flex-grow bg-transparent text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-l"
              target="__blank"
              :to="`${viewerItem.link}`"
            >
              <Icon name="uil:eye" class="mr-2 h-5 w-5" />
              <span>Live</span>
              <Icon
                name="uil:arrow-right"
                class="ml-2 h-5 w-5 hidden group-hover:inline-block"
              />
            </NuxtLink>

            <!-- separator -->
            <div class="w-0.5 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            <NuxtLink
              target="__blank"
              class="flex-1 flex-grow bg-transparent text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-r"
              :class="viewerItem.isPrivate ? 'cursor-not-allowed' : 'cursor-pointer'"
              :to="`${viewerItem.isPrivate ? '' : viewerItem.github}`"
            >
              <Icon name="uil:github" class="mr-2 h-5 w-5" />
              <span>
                {{ viewerItem.isPrivate ? "Private" : "Github" }}
              </span>
              <Icon
                name="uil:arrow-right"
                class="ml-2 h-5 w-5 hidden group-hover:inline-block"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

.v-font {
  font-family: "Satisfy", cursive;
}

.zoom-inner {
  animation: zoom-in 0.5s;
}

.zoom-leave {
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

@keyframes zoom-out {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>
