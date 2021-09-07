<template>
  <div id="app">
    <div class="container bg-light">
      <app-navbar/>
    <router-view/>
    </div>
    <greeting-modal ref="modal"/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import GreetingModal from './components/GreetingModal.vue';

export default {
  components: { GreetingModal, AppNavbar },

  mounted() {
    if (!localStorage.getItem('name')) {
      this.$refs.modal.open();
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
