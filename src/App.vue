<template>
  <div id="app">
    <v-app>
      <v-theme-provider>
        <!-- <v-navigation-drawer app></v-navigation-drawer> -->
        <v-app-bar app fixed>
           <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <DarkThemeSwitcher />
        </v-app-bar>
        <v-main>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
        <v-footer app>
          <!-- -->
        </v-footer>
      </v-theme-provider>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DarkThemeSwitcher from "@/components/DarkThemeSwitcher.vue";
@Component({
  components: {
    DarkThemeSwitcher,
  },
})
export default class App extends Vue {}
</script>
