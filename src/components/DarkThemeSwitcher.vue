<template>
  <a @click="themeModeChanged" class="theme-switch">
    <span v-if="mode === true">
      <img alt="logo" src="@/assets/images/moon.png" width="16" height="16"/>      
    </span>
    <span v-else>
      <img alt="logo" src="@/assets/images/sun.png" width="16" height="16" />
    </span>
  </a>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class DarkThemeSwitcher extends Vue {
  mode = false;

  mounted() {
    console.log("Load");
    const bodyElement = document.body;
    bodyElement.classList.add("app-background");

    const htmlElement = document.documentElement;
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.mode = false;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.mode = true;
    }
  }
  themeModeChanged() {
    console.log("themeModeChanged");
    const htmlElement = document.documentElement;

    if (this.mode) {
      this.mode = false;
      localStorage.setItem("theme", "dark");
      htmlElement.setAttribute("theme", "dark");
    } else {
      this.mode = true;
      localStorage.setItem("theme", "light");
      htmlElement.setAttribute("theme", "light");
    }
  }
}
</script>