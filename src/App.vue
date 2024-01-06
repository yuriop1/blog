<template>
  <div>
    <!-- <List :블로그글="블로그글"></List> -->
    <router-view :블로그글="블로그글"></router-view>
    <router-link to="/">홈페이지</router-link>
    <router-link to="/list">리스트페이지</router-link>
    <router-link to="/detail">상세페이지</router-link>
  </div>
</template>
<script>

import blogData from './assets/BlogData.js';
//import List from './components/BlogList.vue';

export default {
  name: 'App',
  components:{
    //List
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
