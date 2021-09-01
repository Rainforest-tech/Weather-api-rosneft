<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div :key="day.dt" v-for="day in weatherData.daily" class="col">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">
              {{ $date(new Date(day.dt * 1000), '...:::EEEE => dd MMMM yyyy:::...', { locale }) }}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the
              bulk of the card's content.</p>
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
      api_key: 'cab6000d6f3161c8b88da92f1212b0a0',
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
