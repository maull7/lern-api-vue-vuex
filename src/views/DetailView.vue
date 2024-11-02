<template>
    <div class="p-4">
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>
  
        <div class="text-center">
          <img
            alt=""
            :src="detail.attributes?.posterImage?.large"
            class="mx-auto mb-4 rounded-lg object-cover shadow-sm w-32 h-48 sm:w-48 sm:h-72"
          />
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
            {{ detail.attributes?.canonicalTitle }}
          </h3>
          <p class="mt-1 text-xs font-medium text-gray-600">{{ detail.attributes?.averageRating }}</p>
        </div>
  
        <div class="mt-4">
          <p class="text-pretty text-sm text-gray-500">
            {{ detail.attributes?.synopsis }}
          </p>
        </div>
  
        <dl class="mt-6 flex flex-col gap-4 sm:gap-6">
          <div class="flex flex-col">
            <dt class="text-sm font-medium text-gray-600">Genres</dt>
            <dd class="text-xs text-gray-500">{{ detail.attributes?.genres?.join(', ') }}</dd>
          </div>
          <div class="flex flex-col">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
        <router-link 
      :to="`/`" 
      class="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
    >
      BACK TO HOME
    </router-link>
      </a>
    </div>
  </template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'DetailView',
    computed: {
    ...mapGetters(['anime']),
    detail() {
      const animeId = this.$route.params.id; // Ambil ID dari parameter rute
      // Periksa apakah this.anime ada sebelum memanggil find
      return this.anime ? this.anime.find(anime => anime.id === animeId) : null;
    }
}
}
</script>