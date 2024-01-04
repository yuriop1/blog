<template>
  <div>
    <div>    
      <h5>내일 점심은 행운버거</h5>
      <p> -맥도날드에서 시킬꺼임 - </p>
    </div>
    <List :블로그글="블로그글"></List>
  </div>
</template>
<script>

import List from './components/BlogList.vue';
import blogData from './assets/BlogData.js';

export default {
  name: 'App',
  components:{
    List
  },
  data(){
    return{
      블로그글 : blogData
    }
  },

  mounted(){
  },

  methods : {
   
  },
}

</script>
