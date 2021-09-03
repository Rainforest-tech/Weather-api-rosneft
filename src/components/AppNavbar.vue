<template>
  <nav class="navbar navbar-expand-lg navbar-light text-black-50 nav-color
    mb-3 nav  shadow rounded-bottom">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/charts" active-class="active">
              Weather charts
            </router-link>
          </li>
          <li :class="[item.children.length ? 'dropdown' : '' , 'nav-item']"
              v-for="item in menu"
              :key="item.id">
            <a class="nav-link dropdown-toggle" :href="item.href" id="navbarDropdownMenuLink"
               @click.prevent="toggleMenu(item.id)"
               role="button"
               data-bs-toggle="dropdown">
              {{ item.text }}
            </a>
            <ul :class="['dropdown-menu', open === item.id ? 'show' : '']"
                v-if="item.children.length"
                aria-labelledby="navbarDropdownMenuLink">
              <li v-for="child in item.children" :key="child.id">
                <a class="dropdown-item"
                   @click.p.prevent
                   :href="child.href">{{ child.text }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    <div v-if="name"> Hello, {{name}}/{{role}} </div>
    </div>
  </nav>
</template>

<script>

import menu from '../menu.json';

export default {
  name: 'AppNavbar',
  computed: {
    name() {
      return localStorage.name;
    },
    role() {
      return localStorage.role;
    },
  },
  data() {
    return {
      menu,
      open: '',
    };
  },
  methods: {
    toggleMenu(id) {
      this.open = this.open === id ? '' : id;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

a {
  font-weight: bold;
  color: #2c3e50;

&.router-link-exact-active {
   color: #42b983;
 }
}
}

.nav-color {
  background-color: #fecf00;
  color: #000;
}
</style>
