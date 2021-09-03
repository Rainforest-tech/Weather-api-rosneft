<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <apexchart
          :options="opts"
          :series="series"
          height="300"
          type="line"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Chart',
  computed: {
    series() {
      return [
        {
          name: 'Day temp',
          data: this.$store.state.weatherData
            .map((day) => [day.dt * 1000, Math.round(day.temp.day)]),
        },
        {
          name: 'Night temp',
          data: this.$store.state.weatherData
            .map((day) => [day.dt * 1000, Math.round(day.temp.night)]),
        },
      ];
    },
  },
  data() {
    return {
      opts: {
        chart: {
          height: 380,
          width: '100%',
          type: 'area',
          animations: {
            initialAnimation: {
              enabled: false,
            },
          },
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          type: 'datetime',
        },
        dataLabels: {
          enabled: true,
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
          curve: 'smooth',
        },

      },
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    ...mapActions(['getLocation']),
  },
};
</script>
