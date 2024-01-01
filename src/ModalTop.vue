<template>
    <div class="black-bg" v-if="모달창오픈여부 == true">
    <div class="white-bg">
      <img :src="원룸들[popupOpenCount].image" class="room-img">
      <h4>{{ 원룸들[popupOpenCount].title }}</h4>
      <input v-model="month">
      <p>{{ month }}개월 입력하여 원룸의 가격은 : {{ (원룸들[popupOpenCount].price)*month }}원</p>
      <pre>{{ 원룸들[popupOpenCount].content }}</pre>
      <button @click="$emit('closePopup')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTop',
  props: {
    원룸들 : Array,
    모달창오픈여부 : Boolean, 
    popupOpenCount : Number
  },
  data(){
    return {
      month : 1,
    }
  },
  watch : {
    month(newVal){
      const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if(korean.test(newVal)){
        alert('경고경고 13이상 입력하지 마세요')
        this.month = 1;
      }
      if(newVal >= 13){
        alert('경고경고 13이상 입력하지 마세요')
        this.month = 1;
      }
      if(newVal == 2){
        alert('저희는 2개월부터 받습니다');
        this.month = 1;
      }
    }
  },
}
</script>

<style>

</style>