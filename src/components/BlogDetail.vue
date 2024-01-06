<template>
  <div style="border-top: solid 1px #928787;">
    <h4>{{블로그글[0].title }}</h4>
    <pre>{{ 블로그글[0].content }}</pre>
  </div>
  <div style="border-top: solid 1px #928787;">
    <h4>{{블로그글[1].title }}</h4>
    <pre>{{ 블로그글[1].content }}</pre>
  </div>
  <div style="border-top: solid 1px #928787;">
    <h4>{{블로그글[2].title }}</h4>
    <pre>{{ 블로그글[2].content }}</pre>
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