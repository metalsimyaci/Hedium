<template>
  <div class="ma-1 pa-1">
    <CategoryTimeline :data="data"></CategoryTimeline>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CategoryTimeline from "@/components/CategoryTimeline.vue";
import CategoryList from "@/models/categoryListModel";
import Category from "@/models/categoryModel";
@Component({
  components: {
    CategoryTimeline,
  },
})
export default class Categories extends Vue {
  data: Array<CategoryList> = [];
  created() {
    const colors: Array<string> = ["green", "red", "blue", "cyan", "grey"];

    for (let j = 0; j < 10; j++) {
      const list: Array<Category> = [];

      for (let index = 0; index < 10; index++) {
        const createDate: Date = this.randomDate(
          new Date(2012, 0, 1),
          new Date()
        );
        const category = new Category(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui maiores est" + index,
          createDate.toLocaleDateString(),
          colors[index % 5],
          "/About"
        );
        list.push(category);
      }
      const categoryGroup= new CategoryList('item'+j,colors[j % 5],list)
      this.data.push(categoryGroup)
    }
  }
  randomDate(start: Date, end: Date): Date {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
</script>