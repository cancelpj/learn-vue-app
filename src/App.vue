<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Worktable /> -->
    <transition name="slide-fade">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Worktable from './components/Index.vue';

export default {
  name: 'App',
  // components: {
  //   // HelloWorld
  //   Worktable
  // }
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
