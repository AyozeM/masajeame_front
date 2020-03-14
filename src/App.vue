<template>
  <div id="app">
    <Header name="masajeame"></Header>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
export default Vue.extend({
  components: {
    Header
  }
});
</script>

<style>
html,
body {
  height: 100vh;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>