<template>
  <div id="app">
    <v-theme-provider>
      <v-app>
        <v-navigation-drawer
          v-model="drawer"
          temporary       
          :width="$vuetify.breakpoint.mobile==true?'90%':'50%'"   
          :color="$vuetify.theme.dark===false ? 'white':'black'"             
          :src="$vuetify.theme.dark===false ?require('@/assets/Dragon_Banner.svg'):require('@/assets/Dragon_Banner_dark.svg')"
          app
        >
          <v-container
            class="d-flex half-width pa-8 mt-10 justify-center flex-column align-center align-content-center"
          >
            <v-avatar>
              <v-img :src="require('@/assets/logo.svg')" alt="Hasan URAL"></v-img>
            </v-avatar>
            <h2>Hasan URAL</h2>
            <v-spacer></v-spacer>
            <p>
              En yalın haliyle paylaşım platformu
              Java Cloud Mikroservis Spring Boot NoSQL Kafka Dağıtık Sistemler Big Data ve Blockchain hakkında karalamalarım
            </p>
           <v-spacer></v-spacer>
            <v-container class="d-flex align-center justify-space-around">
              <v-btn color="indigo font-weight-black" text to="/">Yazılar</v-btn>
              <v-btn text to="/Categories">Kategoriler</v-btn>
              <v-btn text to="/About">Hakkımda</v-btn>
            </v-container>
            <v-container class="d-flex align-center justify-space-around">
              <v-btn fab href="https://twitter.com/metalsimyaci">
                <v-icon large>mdi-twitter</v-icon>
              </v-btn>
              <v-btn fab>
                <v-icon large>mdi-stack-overflow</v-icon>
              </v-btn>
              <v-btn fab>
                <v-icon large>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn fab>
                <v-icon large>mdi-github</v-icon>
              </v-btn>
              <v-btn fab>
                <v-icon large>mdi-at</v-icon>
              </v-btn>
              <v-btn fab>
                <v-icon large>mdi-rss</v-icon>
              </v-btn>
            </v-container>
          </v-container>
        </v-navigation-drawer>
        <v-app-bar
          app
          flat
          shrink-on-scroll
          prominent
          :src="$vuetify.theme.dark===false ?require('@/assets/Dragon_Banner.svg'):require('@/assets/Dragon_Banner_dark.svg')"
          :color="$vuetify.theme.dark===false ? 'black':'white'"
          elevate-on-scroll
        >
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title class="heading">
            Hasan URAL
            <span class="subtitle-1">Ejderhasını arayan bir yazılımcının maceraları</span>
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
  drawer = false;
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
