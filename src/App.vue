<template>
  <div id="app">
    <v-theme-provider>
      <v-app>
        <!-- <v-navigation-drawer app>
        </v-navigation-drawer>-->
        <v-app-bar app flat shrink-on-scroll prominent :src="require('@/assets/Dragon_Banner.svg')">
          <v-toolbar-title class="heading" >
            Hasan URAL  <span class="subtitle-1"> Ejderhasını arayan bir yazılımcının maceraları</span>
          </v-toolbar-title>
          
          <v-spacer></v-spacer>
          <v-btn text to="/">Yazılar</v-btn>
          <v-btn text to="/Categories">Kategoriler</v-btn>
          <v-btn text to="/About">Hakkımda</v-btn>
          <v-btn icon @click="themeModeChanged">
            <svg-icon
              :icon-class="$vuetify.theme.dark===false ? 'moon':'sun'"
              class="theme-change-icon"
            />
          </v-btn>
        </v-app-bar>

        <v-main class="overflow-y-auto">
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>

        <v-footer>
          <v-col class="text-center" cols="12">
            &copy;{{ new Date().getFullYear() }} —
            <strong>hasanural.com</strong> - Hiç bir hakkı saklı değildir
          </v-col>
        </v-footer>
      </v-app>
    </v-theme-provider>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class App extends Vue {
  themeModeChanged() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
<style lang="scss">
.theme-change-icon {
  width: 32px !important;
  height: 32px !important;
}
</style>
