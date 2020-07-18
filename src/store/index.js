import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location';
const header = { headers: { Origin: null } };

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    weather: {},
    isLoading: false,
    error: '',
  },
  getters: {
    gettersInitLocations: (state) => state.locations,
    gettersInitWeather: (state) => state.weather,
    gettrsIsLoading: (state) => state.isLoading,
    gettersError: (state) => state.error,
  },
  actions: {
    getLocations({ commit }, lattlong) {
      commit('mutateIsLoading', true);
      return axios
        .get(`${API_URL}/search/?lattlong=${lattlong[0]},${lattlong[1]}`, header)
        .then((response) => {
          commit('mutateGetLocation', response.data);
          return Promise.resolve();
        })
        .catch(({ message }) => {
          commit('mutateError', message);
        })
        .finally(() => commit('mutateIsLoading', false));
    },
    getWeather({ commit }, id) {
      commit('mutateIsLoading', true);
      return axios
        .get(`${API_URL}/${id}`, header)
        .then((response) => {
          commit('mutateGetWeather', response.data);
          return Promise.resolve();
        })
        .catch(({ message }) => {
          commit('mutateError', message);
        })
        .finally(() => commit('mutateIsLoading', false));
    },
  },
  mutations: {
    mutateGetLocations(state, locations) {
      state.locations = locations;
    },
    mutateGetWeather(state, weather) {
      state.weather = weather;
    },
    mutateIsLoading(state, toggle) {
      state.isLoading = toggle;
    },
    mutateError(state, errorMessage) {
      state.error = errorMessage;
    },
  },
});
