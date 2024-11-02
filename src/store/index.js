import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    ListAnime: [],
    searchQuery: ''
  },
  getters: {
    anime: state => state.ListAnime,
    filteredAnime: state => {
      if (!state.searchQuery) return state.ListAnime;
      return state.ListAnime.filter(anime =>
        anime.attributes.canonicalTitle.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }
  },
  mutations: {
    setAnimeData(state, animeData) { // Ganti nama menjadi setAnimeData
      console.log("Data anime diterima:", animeData);
      state.ListAnime = animeData;
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    async getAnime({ commit }) {
      try {
        const response = await axios.get('https://kitsu.io/api/edge/anime');
        commit("setAnimeData", response.data.data); // Perbaiki nama mutasi di sini
      } catch (error) {
        console.error('error', error);
      }
    }
  },
  modules: {}
});
