<template>
  <div class="dark:bg-slate-900 bg-gray-100 min-h-screen">
    <Navigation />
    <div class="dark:bg-slate-900 bg-gray-100 min-h-screen">
       <NuxtPage  />
    </div>
 
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
  
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

</style>
