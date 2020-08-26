<template>
<v-container>
  
  <div class="home">
    <Posts :data="posts"></Posts>    
  </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Posts from "@/components/Posts.vue";
import PostModel from '@/models/postModel';
@Component({
  components: {
    Posts,
  },
})
export default class Home extends Vue {
  posts: Array<PostModel> = [{
    key:'1',
    title:'Gele bele Gele bele bu yana',
    subtitle:'bir şey diyeyim sana. Dünya dolu yar olsa da alacağın bir tane',
    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita dicta ipsa obcaecati maiores inventore et hic, fuga dignissimos sequi aliquam a laborum aspernatur,<b>black</b> quo tempore, delectus quae repellat eum.',
    readCount: 1,
    createDate:'18-07-2020',
    link:"'/blablabla'"
  },
  {
    key:'2',
    title:'Gele bele Gele bele bu yana',
    subtitle:'bir şey diyeyim sana. Dünya dolu yar olsa da alacağın bir tane',
    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita dicta ipsa obcaecati maiores inventore et hic, fuga dignissimos sequi aliquam a laborum aspernatur,<b>black</b> quo tempore, delectus quae repellat eum.',
    readCount: 1,
    createDate:'18-07-2020',
    link:"'/blablabla'"
  },
  {
    key:'3',
    title:'Gele bele Gele bele bu yana',
    subtitle:'bir şey diyeyim sana. Dünya dolu yar olsa da alacağın bir tane',
    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita dicta ipsa obcaecati maiores inventore et hic, fuga dignissimos sequi aliquam a laborum aspernatur,<b>black</b> quo tempore, delectus quae repellat eum.',
    readCount: 1,
    createDate:'18-07-2020',
    link:"'/blablabla'"
  },
  {
    key:'4',
    title:'Gele bele Gele bele bu yana',
    subtitle:'bir şey diyeyim sana. Dünya dolu yar olsa da alacağın bir tane',
    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita dicta ipsa obcaecati maiores inventore et hic, fuga dignissimos sequi aliquam a laborum aspernatur,<b>black</b> quo tempore, delectus quae repellat eum.',
    readCount: 1,
    createDate:'18-07-2020',
    link:"'/blablabla'"
  },
  {
    key:'5',
    title:'Gele bele Gele bele bu yana',
    subtitle:'bir şey diyeyim sana. Dünya dolu yar olsa da alacağın bir tane',
    content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi expedita dicta ipsa obcaecati maiores inventore et hic, fuga dignissimos sequi aliquam a laborum aspernatur,<b>black</b> quo tempore, delectus quae repellat eum.',
    readCount: 1,
    createDate:'18-07-2020',
    link:"'/blablabla'"
  }
  
  ]
}
</script>
