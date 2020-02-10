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
     data (){  
         return {
             iconList:[
             {id :'001',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'002',name:'机票',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png'},
             {id :'003',name:'度假',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'004',name:'景点门票',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png'},
             {id :'005',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'006',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'007',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'008',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},
             {id :'009',name:'酒店',imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png'},]
         }
     },
     computed:{
         pages(){
        let pages=[]
         this.iconList.forEach((item,index)=>{
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