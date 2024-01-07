<template>
  <div>
    <h4 @click="$router.push('/detail/0')">{{블로그글[0].title }}</h4>
    <p>{{ 블로그글[0].date }}</p>
    <pre>{{ 블로그글[0].content }}</pre>
  </div>
  <div>
    <h4 @click="$router.push('/detail/1')">{{블로그글[1].title }}</h4>
    <p>{{ 블로그글[1].date }}</p>
    <pre>{{ 블로그글[1].content }}</pre>
  </div>
  <div>
    <h4 @click="$router.push('/detail/2')">{{블로그글[2].title }}</h4>
    <p>{{ 블로그글[2].date }}</p>
    <pre>{{ 블로그글[2].content }}</pre>
  </div>

</template>

<script>
export default {
  name : 'listVue',
  props : {
    블로그글 : Array,
  }

}
</script>

<style>

</style>