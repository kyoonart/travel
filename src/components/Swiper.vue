<template>
    <div>
 <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgurl" /></swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
 </swiper>
    </div>
</template> 
<script>
export default {
    name:'Home-Swiper',
    data (){
        return {
             swiperList:[
              {
                  id:'001',
                  imgurl:'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
              },
               {
                  id:'002',
                  imgurl:'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
              },
               {
                  id:'003',
                  imgurl:'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
              },
               {  id:'004',
                  imgurl:'https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
              }
          ],
      swiperOption:{
         pagination: {
            el: '.swiper-pagination',    
          },
         loop:true        
      }
        }
    }
}
</script>
<style lang="stylus" scoped>
 .swiper >>> .swiper-pagination-bullet-active 
  background :#fff
 .swiper
   width :100%
   height :31.25vm
   img
    width :100%
</style>