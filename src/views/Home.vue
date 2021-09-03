<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div :key="day.dt" v-for="day in weatherData" class="col">
        <div class="card  card-body-color mb-3">
          <div class="card-body ">
            <h5 class="card-title">
              {{ $date(new Date(day.dt * 1000), 'EEEE dd MMMM yyyy') }}
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

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState(['weatherData']),
  },
  created() {
    this.getLocation();
  },
  methods: {
    ...mapActions(['getLocation']),
  },
};
</script>

<style lang="scss" scoped>
  .card-body-color {
    background-color: #bfdbf7;
  }
</style>
