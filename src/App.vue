<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
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
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import menu from './menu.json';

export default {
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
