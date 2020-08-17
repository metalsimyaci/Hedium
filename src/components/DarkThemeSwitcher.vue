<template>
  <a @click="themeModeChanged" class="theme-switch">
    <span>
      <svg-icon :icon-class="mode===true ? 'moon':'sun'" />
    </span>
  </a>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DarkThemeSwitcher extends Vue {
  mode = true;

  mounted() {
    // const bodyElement = document.body;
    // bodyElement.classList.add("app-background");

    // const htmlElement = document.documentElement;
    // const theme = localStorage.getItem("theme");

    // if (theme === "dark") {
    //   // htmlElement.setAttribute("theme", "dark");
    //   this.$vuetify.theme.dark=true;
    //   this.mode = false;
    // } else {
    //   this.$vuetify.theme.dark=false;
    //   // htmlElement.setAttribute("theme", "light");
    //   this.mode = true;
    // }
  }
  themeModeChanged() {
    this.$vuetify.theme.dark=this.mode;
    this.mode=!this.mode;
    
    // const htmlElement = document.documentElement;

    // if (this.mode) {
    //   this.mode = false;
    //   this.$vuetify.theme.dark=false;
    //   // localStorage.setItem("theme", "dark");
    //   // htmlElement.setAttribute("theme", "dark");
    // } else {
    //   this.mode = true;
    //   this.$vuetify.theme.dark=true;
    //   // localStorage.setItem("theme", "light");
    //   // htmlElement.setAttribute("theme", "light");
    // }
  }
}
</script>