<template>
    <div class="dark:bg-slate-900 bg-gray-100 min-h-screen">
        <UCard class=" mt-2 dark:bg-gray-900 bg-gray-100 mx-1">
    <template #header>
      <v-font class="text-2xl font-bold">My projects</v-font>
    </template>
    <template #default>
    <div 
     class="mt-3"
    />
     <Delayout 

     />
     <div 
     class="mb-3"
    />
    </template>
    <template #footer>
        <div class="flex justify-end">
            <NuxtLink class="bg-transparent px-2 text-black dark:text-white shadow-none group  justify-center items-center flex dark:bg-transparent ring-1 ring-gray-300 hover:bg-gray-300 hover:dark:bg-gray-500  hover:ring-2 hover:ring-gray-700
            transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md"  :to="`${1}`">
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
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<style scoped>

</style>