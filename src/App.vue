<template>
  <div id="app">
    <div id="nav" class="metabar">
       <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <DarkThemeSwitcher/>     
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DarkThemeSwitcher from '@/components/DarkThemeSwitcher.vue';
@Component({
  components: {
    DarkThemeSwitcher
  }
})

export default class App extends Vue {}
</script>
