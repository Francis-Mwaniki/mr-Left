<script setup lang="ts">
const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/francis-mwaniki-378603220/",
    icon: "uil:linkedin",
  },
  {
    name: "Github",
    link: "https://github.com/Francis-Mwaniki",
    icon: "uil:github",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/FRANCIS90776084",
    icon: "uil:twitter",
  },
];

const skills = [
  {
    name: "Vuejs",
    icon: "logos:vue",
  },
  {
    name: "Git",
    icon: "bi:git",
  },
  {
    name: "Nuxtjs",
    icon: "logos:nuxt-icon",
  },
  {
    name: "Reactjs",
    icon: "logos:react",
  },
  {
    name: "Nextjs",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Prisma",
    icon: "tabler:brand-prisma",
  },
  {
    name: "Tailwindcss",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Supabase",
    icon: "logos:supabase-icon",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "MongoDB",
    icon: "skill-icons:mongodb",
  },
  {
    name: "Expressjs",
    icon: "skill-icons:expressjs-light",
  },
  {
    name: "Nestjs",
    icon: "logos:nestjs",
  },
  {
    name: "Python-(familiar)",
    icon: "logos:python",
  },
  {
    name: "Flask",
    icon: "skill-icons:flask-dark",
  },
  {
    name: "Streamlit",
    icon: "logos:streamlit",
  },
];

const npmPackages = [
  {
    name: "franc-audio-Transcribe",
    version: "^2.0.0",
    link: "https://www.npmjs.com/package/franc-audio-to-text",
  },
  {
    name: "text-analyzer",
    version: "^2.15.7",
    link: "https://www.npmjs.com/package/text-analysis-api",
  },
  {
    name: "text-To-Speech",
    version: "^2.0.2",
    link: "https://www.npmjs.com/package/text-to-speech-converter",
  },
];

const myGithubStats = ref({
  followers: 187,
  following: 319,
  public_repos: 175,
  all_repo: 254,
  stars: 76,
  contributions: [
    {
      year: 2022,
      count: 148,
    },
    {
      year: 2023,
      count: 1239,
    },
    {
      year: 2024,
      count: 296,
    },
  ],
  pull_requests: 185,
});

const zoomed = ref(false);

const openViewer = () => {
  zoomed.value = true;
};

const closeView = () => {
  zoomed.value = false;
  console.log("closed", zoomed.value);
};
</script>

<template>
  <div class="ease-zoom-in">
    <UCard class="my-4 sm:mx-20">
      <template #header>
        <h1 class="text-2xl font-bold v-font">About</h1>
      </template>
      <template #default>
        <!-- Zoomed Image -->
        <div
          v-show="zoomed"
          class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center flex-col"
          :class="{
            'pointer-events-auto': zoomed,
            'pointer-events-none': !zoomed,
            'opacity-100': zoomed,
            'opacity-0': !zoomed,
            'ease-zoom-left': zoomed,
            'ease-zoom-right': !zoomed,
          }"
        >
          <img src="/Mrleft.jpeg" alt="profile" class="rounded-lg h-96 w-96" />
          <!-- close X-->
          <div class="absolute top-4 right-4">
            <UButton
              @click="closeView()"
              class="bg-red-900 dark:bg-red-950 p-2 rounded-lg"
            >
              <Icon name="ic:round-close" class="h-8 w-8 text-white" />
            </UButton>
          </div>
        </div>
        <div class="group relative flex justify-center items-center">
          <img src="/Mrleft.jpeg" alt="profile" class="rounded-full h-40 w-40" />

          <!-- zoom   hidden group-hover:inline-block inside image-->
          <div
            class="absolute inset-0 max-w-md sm:w-[20%] w-[40%] h-full scale-90 hover:scale-100 shadow-lg backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-70 flex items-center justify-center mx-auto rounded opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <a @click="openViewer()" class="cursor-pointer"
              ><Icon name="ic:round-zoom-out-map" class="h-8 w-8 text-white"
            /></a>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-bold v-font">Francis Mwaniki</h1>
          <p
            class="max-w-lg ring-1 ring-gray-300 dark:ring-gray-700 p-2 mt-3 dark:bg-slate-950 dark:text-white rounded"
          >
            i am a versatile software developer who is passionate about frontend
            development. As a full-stack developer with a primary focus on frontend
            technologies, i excels in crafting engaging web applications using Vue.js,
            Nuxt.js, React.js, Next.js, Tailwind CSS, and more. His expertise lies in
            creating intuitive user interfaces that enhance the overall user experience.
            With a proactive and collaborative approach, i thrives in team environments,
            where he actively contributes ideas and works closely with others to bring
            projects to life. His commitment to continuous learning and staying updated
            with the latest industry trends ensures that he delivers solutions that are
            both innovative and impactful, making him an invaluable asset to any company
            looking to innovate and excel in the digital space.
          </p>
          <br />
          <br />
          <!-- also familiar with Python(flask,streamlit) -database(mongoDB,SUPABASE,firebase), Backend(nestjs,expressjs-->
        </div>
      </template>

      <template #footer>
        <!-- socials <Icon /> LinkedIn, github, Twitter -->
        <div class="flex px-4 space-x-4 overflow-x-auto">
          <template class="my-5 pr-7" v-for="social in socials" :key="social.name">
            <NuxtLink
              class="bg-transparent px-2 text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent ring-1 ring-gray-300 hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md my-5"
              target="__blank"
              :to="social.link"
            >
              <Icon :name="social.icon" class="mr-2 h-5 w-5" />
              <span>{{ social.name }}</span>
              <Icon name="uil:arrow-right" class="mr-2 h-5 w-5" />
            </NuxtLink>
          </template>
        </div>
      </template>
    </UCard>

    <UCard class="mt-4 sm:mx-20">
      <template #header>
        <h1 class="text-2xl font-bold v-font">Skills</h1>
      </template>
      <template #default>
        <!-- skills -->
        <div class="grid grid-cols-3 gap-4">
          <template v-for="skill in skills" :key="skill.name">
            <div
              class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg hover:bg-gray-200 hover:dark:bg-gray-700 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 cursor-text"
            >
              <Icon :name="skill.icon" class="h-12 w-12 text-black dark:text-white" />
              <span class="text-sm dark:text-white">{{ skill.name }}</span>
            </div>
          </template>
        </div>
      </template>
    </UCard>
    <!-- githubStats -->
    <UCard class="mt-4 sm:mx-20">
      <template #header>
        <h1 class="text-2xl font-bold v-font">Github Stats</h1>
      </template>
      <template #default>
        <div class="grid grid-cols-2 gap-4">
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">Followers</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.followers }}</span>
          </div>
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">Following</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.following }}</span>
          </div>
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">Public Repos</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.public_repos }}</span>
          </div>
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">All Repos</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.all_repo }}</span>
          </div>
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">Stars</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.stars }}</span>
          </div>

          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">Pull Requests</span>
            <span class="text-sm dark:text-white">{{ myGithubStats.pull_requests }}</span>
          </div>
          <div
            class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg"
          >
            <span class="text-sm dark:text-white">
              Contributions
              <template
                v-for="contribution in myGithubStats.contributions"
                :key="contribution.year"
                class="flex justify-center items-center flex-col"
              >
                <span class="flex justify-center gap-x-2 items-center">
                  <span>year: {{ contribution.year }}</span>
                  <span> counts: {{ contribution.count }} </span>
                </span>
              </template>
            </span>
          </div>
        </div>
      </template>
      <!-- https://francis-mwaniki.github.io/Francis-Mwaniki/ -->
      <template #footer>
        <div class="flex px-4 space-x-4 overflow-x-auto">
          <NuxtLink
            class="bg-transparent px-2 text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent ring-1 ring-gray-300 hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md my-5"
            target="__blank"
            to="https://francis-mwaniki.github.io/Francis-Mwaniki/"
          >
            <Icon name="ic:round-open-in-new" class="mr-2 h-5 w-5" />
            <span>View on Github</span>
            <Icon name="uil:arrow-right" class="mr-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </template>
    </UCard>
    <UCard class="mt-4 sm:mx-20">
      <template #header>
        <h1 class="text-2xl font-bold v-font">Npm Packages</h1>
      </template>
      <template #default>
        <!-- npm packages -->
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <template
            class="flex px-4 space-x-4 overflow-x-auto sm:flex-row flex-col items-center justify-center"
            v-for="npmPackage in npmPackages"
            :key="npmPackage.name"
          >
            <div
              class="flex flex-col items-center ring-1 ring-gray-300 dark:ring-gray-700 p-2 dark:bg-slate-950 dark:text-white rounded-lg hover:bg-gray-200 hover:dark:bg-gray-700 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 cursor-text"
            >
              <span class="text-sm dark:text-white">{{ npmPackage.name }}</span>
              <span class="text-sm dark:text-white">{{ npmPackage.version }}</span>
              <NuxtLink
                class="bg-transparent px-2 text-black dark:text-white shadow-none group justify-center items-center flex dark:bg-transparent ring-1 ring-gray-300 hover:bg-gray-300 hover:dark:bg-gray-500 hover:ring-2 hover:ring-gray-700 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md my-5"
                target="__blank"
                :to="npmPackage.link"
              >
                <Icon name="logos:npm-icon" class="mr-2 h-5 w-5" />
                <span>View on Npm</span>
                <Icon name="uil:arrow-right" class="mr-2 h-5 w-5" />
              </NuxtLink>
            </div>
          </template>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
.ease-zoom-left {
  animation: zoom-left 0.5s ease-in-out;
}

@keyframes zoom-left {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.ease-zoom-right {
  animation: zoom-right 0.5s ease-in-out;
}

@keyframes zoom-right {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
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
