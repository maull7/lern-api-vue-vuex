<template>
    <div>
      <div class="bg-indigo-600 px-4 py-3 text-white">
        <p class="text-center text-sm font-medium">
          Anime anime sedang populer
          <a href="#" class="inline-block underline">Lihat detail untuk melihat lebih lengkap</a>
        </p>
  
        <form class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p class="text-center text-lg font-medium">Search Anime</p>
  
          <div>
            <label for="search" class="sr-only">Anime</label>
            <div class="relative">
              <input
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-gray-950"
                placeholder="Enter Anime"
                v-model="searchQuery"
              />
            </div>
          </div>
        </form>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <a 
  v-for="anime in filteredAnime" 
  :key="anime.id" 
  :href="`/anime/${anime.id}`" 
  class="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-md transition-transform transform hover:scale-105"
>
  <img 
    :src="anime.attributes.posterImage.small" 
    alt="" 
    class="h-80 w-full rounded-tr-3xl object-cover" 
  />
  <div class="p-4 text-center">
    <strong class="text-xl font-medium text-gray-900">{{ anime.attributes.canonicalTitle }}</strong>
    <p class="mt-2 text-gray-700 truncate">
      {{ anime.attributes.synopsis }}
    </p>
    <router-link 
      :to="`/anime/${anime.id}`" 
      class="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
    >
      DETAIL
    </router-link>
  </div>
</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeList',
    computed: {
      animeList() {
        return this.$store.getters.anime; // Ambil daftar anime dari Vuex store
      },
      filteredAnime() {
        return this.$store.getters.filteredAnime; // Ambil anime yang sudah difilter
      },
      searchQuery: {
        get() {
          return this.$store.state.searchQuery; // Ambil query pencarian dari Vuex
        },
        set(value) {
          this.$store.commit('setSearchQuery', value); // Update query pencarian di Vuex
        }
      }
    },
    mounted() {
      this.$store.dispatch('getAnime');
    },
    watch: {
      animeList(newVal) {
        console.log('Data anime:', newVal);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan gaya tambahan jika perlu */
  </style>
  