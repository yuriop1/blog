<template>
  <Transition name = "fade">
    <modalTop :원룸들 = "원룸들" :popupOpenCount="popupOpenCount" :모달창오픈여부="모달창오픈여부" @closePopup="모달창오픈여부 = false"></modalTop>
  </Transition>

  <div>
    <div class="menu">
      <a v-for="keyname in menus" :key="keyname">{{ keyname }}</a>
    </div>

    <DisCountRoom v-if="showDiscount === true"></DisCountRoom>

    <button @click="priceSort">가격순정렬</button>
    <button @click="sortBack">되돌리기</button>

    <Card :원룸 = "원룸들[i]" v-for="(room, i) in 원룸들" :key="room" @openModal="모달창오픈여부 = true; popupOpenCount = $event"></Card>
  </div>
</template>

<script>
import data from './assets/oneRoom.js';
import DisCountRoom from './DiscountRoom.vue';
import ModalTop from './ModalTop.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  components:{
    DisCountRoom : DisCountRoom,
    ModalTop,
    Card,
  },
  data(){
    return{ 
      모달창오픈여부 : false,
      popupOpenCount : 0,
      신고수1 : 0,
      신고수2 : 0,
      신고수3 : 0,
      menus : ['home', 'Shop', 'About'],
      products : ['역삼', '천호', '마포'],
      원룸들 : data,
      원룸들오리지널 : [...data],
      showDiscount : true,
    }
  },

  mounted(){
  },

  methods : {
    increase1(){
      this.신고수1 +=1;
    },
    increase2(){
      this.신고수2 +=1;
    },
    increase3(){
      this.신고수3 +=1;
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널];
    },
  },
}

</script>
<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
.roomSize {
  width: 80%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background-color: #448fda;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color :aliceblue;
  padding : 10px;
}
.discount {
  background: #eee;
  padding: 10px;
  margin:10px;
  border-radius:5px;
}
.start {
  opacity : 0;
  transition : all 1s;
}
.end {
  opacity : 1;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
}
</style>
