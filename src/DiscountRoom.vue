<template>
    <div class="discount">
      <h4>지금결제하면 {{ sales }}%할인</h4>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DiscountRoom',
    data(){
      return{ 
        sales : 99,
      }
    },
    mounted(){
      setInterval(()=>{
        this.sales =  this.sales -1;
      }, 1000);
    },
  }
  </script>
  
  <style>
  
  </style>