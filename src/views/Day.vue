<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="card  card-body-color mb-3 flex-grow-1">
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
              <div class="col-7 mt-4">
                <p class="card-text-size">(feels like {{Math.round(day.feels_like.day)}} °C)</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Night {{Math.round(day.temp.night)}} °C</p>
              </div>
              <div class="col-7">
                <p class="card-text-size">(feels like {{Math.round(day.feels_like.night)}} °C)</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Sunrise {{ $date(new Date(day.sunrise * 1000), 'p') }}</p>
              </div>
              <div class="col">
                <p class="card-text-size">Sunset {{ $date(new Date(day.sunset * 1000), 'p') }}</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Moonrise {{ $date(new Date(day.moonrise * 1000), 'p') }}
                </p>
              </div>
              <div class="col">
                <p class="card-text-size">Moonset {{ $date(new Date(day.moonset * 1000), 'p') }}</p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Pressure {{ Math.round(day.pressure * 0.75006) }} mmHg</p>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <p class="card-text-size">Humidity {{ day.humidity }} %</p>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="card-text-size">Wind speed {{ day.wind_speed }} km/h</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Day',
  computed: {
    day() {
      return this.$route.params.day;
    },

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
