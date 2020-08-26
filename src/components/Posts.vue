le<template>
  <v-container
    class="d-flex flex-center flex-wrap pa-2 align-center justify-center"
  >
    <Post
      v-for="item in data"
      :key="item.key"
      :title="item.title"
      :subtitle="item.subtitle"
      :content="item.content"
      :readCount="item.readCount"
      :createDate="item.createDate"
      :link="item.link"
    ></Post>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Post from "@/components/Post.vue";
import PostModel from '@/models/postModel';

@Component({
  components: {
    Post,
  },
})
export default class Posts extends Vue {
  @Prop({ type: Array, required: true }) data!: Array<PostModel>;
}
</script>