import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherData: null,
    lat: null,
    long: null,
    api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  },
  mutations: {
    SET_COORDS: (state, payload) => {
      state.lat = payload.latitude;
      state.long = payload.longitude;
    },
    SET_WEATHER: (state, payload) => {
      state.weatherData = payload;
    },
  },
  actions: {
    getLocation({ commit, dispatch }) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          commit('SET_COORDS', coords);
          dispatch('getWeatherByCoords');
        },
        () => {
          Vue.$http.get('https://freegeoip.app/json/')
            .then(({ data }) => {
              commit('SET_COORDS', data);
              dispatch('getWeatherByCoords');
            });
        },
      );
    },
    getWeatherByCoords({ commit, state }) {
      const apiKey = process.env.VUE_APP_WEATHER_FORECAST_TOKEN;
      Vue.$http.get(`${state.api_url}?lat=${state.lat}&lon=${state.long}&appid=${apiKey}&units=metric`)
        .then(({ data }) => {
          commit('SET_WEATHER', data.daily);
        });
    },
  },
});
