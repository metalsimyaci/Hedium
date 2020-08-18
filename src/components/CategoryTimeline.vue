<template>
  <v-container class="align-center">
     
    <v-row  class="border-blue">
      <v-col cols="4" fixed>
 <h2>Kategoriler</h2>
      <v-chip v-for="(cg,j) in data" :key="j" :color="cg.color" label class="ma-2" outlined>{{cg.name}}</v-chip>
      </v-col>
      <v-col cols="8" class="border border-blue m0 pa-0 overflow-x-auto" >
        <v-list class="pa-3" v-for="(cg,j) in data" :key="j">
          <v-list-item-title class="headline">{{cg.name}}</v-list-item-title>
          <v-list-item v-for="(item,i) in cg.items" :key="i" dense small>
            <v-btn text :to="item.link">{{item.date}} - {{item.title}}</v-btn>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CategoryList from "@/models/categoryListModel";

@Component
export default class CategoryTimeline extends Vue {
  @Prop({ type: Array, required: true }) data!: Array<CategoryList>;
}
</script>