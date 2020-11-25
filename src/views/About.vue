<template>
  <v-container>
    <h1>Hasan URAL</h1>
    <h2>{{ Message }}{{ $vuetify.lang.current }}</h2>
    <v-divider></v-divider>
    <p>
      En yalın haliyle paylaşım platformu Java Cloud Mikroservis Spring Boot
      NoSQL Kafka Dağıtık Sistemler Big Data ve Blockchain hakkında
      karalamalarım
    </p>
    <v-divider></v-divider>
  </v-container>
</template>
<style lang="scss" scoped>
</style>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';


@Component
export default class About extends Vue {
  get Message(): string {
    return this.$vuetify.lang.t('$vuetify.about.hello');
  }
   beforeCreate() {
     this.$vuetify.lang.current = "tr-TR";     
   }
}
</script>
