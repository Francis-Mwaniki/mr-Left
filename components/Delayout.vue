<script setup lang="ts">
const items = [
  {
    title: 'Realtime ChatApp',
    description: 'I built a realtime chatApp using Vue, Nodejs and Sockets',
    image: 'https://picsum.photos/600/600?random=1',
    link: 'https://vuejs.org/',
    logo:'logos:vue',
    github:""
  },
  {
    title: 'Nuxt BookMarks LandingPage',
    description: 'Nuxt Bookmark was build using Nuxtjs, Supabase and Tailwindcss',
    image: 'https://picsum.photos/600/600?random=2',
    link: 'https://manage-bookmarks.vercel.app/',
    logo:"logos:nuxt-icon",
    github:""
  },
  {
    title: 'Mr Left',
    description: 'Mr left is this portifolio was build using nuxtjs and tailwindcss',
    image: 'https://picsum.photos/600/600?random=3',
    link: 'https://mr-left.vercel.app/',
    logo:"logos:nuxt-icon",
    github:""
  },
  {
    title: 'Cryptops',
    description: " Cryptops was build on top of vuejs and css",
    image: 'https://picsum.photos/600/600?random=4',
    link: 'https://crypttops.com/',
    logo:'logos:vue',
    github:""
  }
  
 
]
</script>

<template>
  <div>
    <h1 class="v-font">Vue And Nuxt Projects</h1>
   <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4'  }" indicators class="rounded-lg overflow-hidden" arrows>
    <UCard class="text-center  m-1">
      <template #header>
            <v-font class="text-lg font-bold">
              {{ item.title }}
            </v-font>
          </template>
          <template #default>
            <div class="flex justify-center flex-col" >
            <div class="relative group">
               
            <img :src="item.image"
            
             class="
             w-full object-cover
               h-1/2 overflow-hidden
              dark:filter dark:brightness-75
              "
            />
          
            
            <!-- zoom   hidden group-hover:inline-block inside image-->
            <div class=" absolute inset-y-0  bottom-0
       w-full h-full
       scale-90 hover:scale-100
       shadow-lg
      backdrop-filter backdrop-blur-sm
       bg-gray-900 bg-opacity-50
      flex items-center justify-center
        rounded opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a class="cursor-pointer "><Icon name="ic:round-zoom-out-map" class="h-8 w-8 text-white " /></a>
              </div></div>


              <div>
          
          <div class="flex justify-start items-center mb-4">
           
              <span class="text-center">Framework used:</span>
              <Icon :name="item.logo"
            class="h-8 w-8 text-green-500" />
              <!-- <Icon name="uil:nuxtjs" class="h-8 w-8 text-blue-500" /> -->
             
          </div>
      
          <div class="flex justify-evenly items-center w-full ring-1  dark:ring-gray-600 ring-gray-300 rounded-lg ">
              <NuxtLink class="flex-1 flex-grow bg-transparent text-black dark:text-white shadow-none group  justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500  hover:ring-2 hover:ring-gray-700
              transition duration-500 ease-in-out hover:opacity-70 py-1  
               rounded-l

              " 
              target="__blank"
               :to="`${item.link}`">
             
              <Icon name="uil:eye" class="mr-2 h-5 w-5" />
               <span>Live</span>
               <Icon name="uil:arrow-right" class="ml-2 h-5 w-5 hidden group-hover:inline-block " />
             
              </NuxtLink> 
          
             <!-- separator -->
              <div class="w-0.5 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              <NuxtLink  class="flex-1 flex-grow  bg-transparent text-black dark:text-white shadow-none group  justify-center items-center flex dark:bg-transparent hover:bg-gray-300 hover:dark:bg-gray-500  hover:ring-2 hover:ring-gray-700
              transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-r " :to="`${item.github}`">
             
               <Icon name="uil:github" class="mr-2 h-5 w-5" />
               <span>Github</span>
               <Icon name="uil:arrow-right" class="ml-2 h-5 w-5 hidden group-hover:inline-block" />
            
              </NuxtLink>

            
          </div>
        </div>
            </div>
          </template>
        
      
    </UCard>
  </UCarousel>
  </div>
 
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
  
  .v-font {
    font-family: "Satisfy", cursive;
  }
</style>