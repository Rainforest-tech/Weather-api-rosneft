<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div :key="day.dt" v-for="day in weatherData.daily" class="col">
        <div class="card  card-body-color mb-3">
          <div class="card-body ">
            <h5 class="card-title">
              {{ $date(new Date(day.dt * 1000), 'EEEE dd MMMM yyyy', { locale }) }}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted text-black-50">Weather forecast</h6>
            <p class="card-text">Day {{Math.round(day.feels_like.day)}} °C</p>
            <p class="card-text">Night {{Math.round(day.feels_like.night)}} °C</p>
            <router-link :to="{ name: 'Day', params: { dt: day.dt, day: day }}">
              Details
            </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import locale from 'date-fns/locale/ru';

export default {
  name: 'Home',

  data() {
    return {
      locale,
      weatherData: null,
      lat: null,
      long: null,
      api_url: 'https://api.openweathermap.org/data/2.5/onecall',
      api_key: process.env.VUE_APP_WEATHER_FORECAST_TOKEN,
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.lat = coords.latitude;
          this.long = coords.longitude;
          this.getWeatherByCoords();
        },
        () => {
          this.$http.get('https://freegeoip.app/json/')
            .then(({ data }) => {
              this.lat = data.latitude;
              this.long = data.longitude;
              this.getWeatherByCoords();
            });
        },
      );
    },
    getWeatherByCoords() {
      this.$http.get(`${this.api_url}?lat=${this.lat}&lon=${this.long}&appid=${this.api_key}&units=metric`)
        .then(({ data }) => {
          this.weatherData = data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .card-body-color {
    background-color: #bfdbf7;
  }
</style>
