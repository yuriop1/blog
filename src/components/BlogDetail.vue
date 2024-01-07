<template>
  <div style="border: solid 1px #928787;">
    <h4>상세페이지</h4>
    <h5>{{블로그글[$route.params.id].title }}</h5>
    <pre>{{ 블로그글[$route.params.id].content }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name : 'detailVue',
  props : {
    블로그글 : Array,
  }

}
</script>

<style>

</style>