<template>
<div class="">

   <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="" class="rounded-circle shadow-lg">

  {{$route.params}}</div>
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

<style scoped>

</style>
