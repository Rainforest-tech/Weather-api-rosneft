<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div :key="day.dt" v-for="day in weatherData" class="col d-flex align-items-stretch">
        <div class="card  card-body-color mb-3  flex-grow-1">
          <div class="card-body ">
            <h5 class="card-title">
              {{ $date(new Date(day.dt * 1000), 'dd MMMM yyyy') }} <br>
              {{ $date(new Date(day.dt * 1000), 'EEEE') }}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted text-black-50">{{ title }}</h6>
            <div class="row mt-3">
              <div class="col">
                <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
                     alt="" class="rounded-circle img-thumbnail shadow-lg">
              </div>
              </div>
            <div class="row">
              <div class="col mt-4">
              <p class="card-text-size">Day {{Math.round(day.temp.day)}} °C</p>
            </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Night {{Math.round(day.temp.night)}} °C</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col">
                <router-link :to="{ name: 'Day', params: { dt: day.dt, day: day }}">
                  <span>Details</span>
                </router-link>
              </div>
            </div>
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
  data() {
    return {
      title: 'Weather forecast',
    };
  },
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
    background-color: #B9B7BD;
  }
  .card-text-size {
    font-size: 20px;
  }
</style>
