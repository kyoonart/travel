<template>
    <div class="icons">
        <swiper>
          <swiper-slide v-for="(item,index) in pages" :key="index">
         <div class="icon" v-for="iten in item" :key="iten.id" >
          <div class="img"> <img :src="iten.imgUrl" class="icon-img"></div>
            <p>{{iten.name}}</p>
        </div>
        </swiper-slide>
        </swiper>
        
    </div>
</template>
<script> 
export default {
     name:"HomeIcons",
     props:{
      iconsList:Array
     },
     computed:{
         pages(){
        let pages=[]
         this.iconsList.forEach((item,index)=>{
        let page=Math.floor(index/8)
        if(!pages[page]){
         pages[page]=[]
        }
        pages[page].push(item)
         })
         return pages
         }    
     }
}
</script>
<style scoped>
  .icons{
      width: 100%;
      height: 50vm;
      text-align: center;
  }
   .icons .icon{
       width: 25%;
       height: 25%;
       box-sizing: border-box;
       margin-top: .2rem;
       float: left;
   }
    .icons .icon .img{
        margin-bottom: 0.15rem
    }
   .icons .icon .icon-img{
       width:70%
   }
    .icons .icon p{
        text-align: center;
    }
</style>