<template>
<v-hover  v-slot="{ hover }">
  <v-card
    class="ma-1 col-md-4 col-sm-5 col-lg-3 col-xl-2 col-12"
    outlined :elevation="hover ? 12 : 1"
    v-ripple="{ center: true }"
  >
    <v-subheader>{{createDate}}</v-subheader>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{title}}</v-list-item-title>
        <v-list-item-subtitle>{{subtitle}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <div v-html="content"></div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon color="red">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon color="blue">
        <v-icon>mdi-eye</v-icon>
        {{readCount}}
      </v-btn>
      <v-btn text class="float-right" :href="link">Detay</v-btn>
    </v-card-actions>
     <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            :color="$vuetify.theme.dark===false ? 'black':'white'"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
  </v-card>
  </v-hover>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Post extends Vue {
  @Prop({ type: String, required: true }) title!: string;
  @Prop({ type: String, default: "" }) subtitle!: string;
  @Prop({ type: String, default: "" }) content!: string;
  @Prop({ type: Number, default: 0 }) readCount!: number;
  @Prop({ type: String, required: true }) createDate!: string;
  @Prop({ type: String, required: true }) link!: string;
}
</script>