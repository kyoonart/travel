<template>
    <div>
        <div class="title">
            <router-link to='/'><span class="iconfont arrow-back">&#xe624;</span></router-link>城市选择  
    </div>
     <div class="input"><input class ="input-search" type="text" placeholder="请输入要查询的城市" v-model="keyword">
     <div class="search-content" ref="wapper" v-show="keyword">
     <div>  <ul>
       <li v-for="item in list" :key="item.id">{{item.name}}</li>
       </ul>
       <ul><li v-show="!list.length">没有找到数据哦</li></ul></div>
       </div>    
     </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'city',
    props:{
      citydata:Object
    },
    mounted (){
      this.scroll = new BScroll(this.$refs.wapper)
    },
data (){
   return {
     keyword:'',
     list:[],
     timer:null
   }
    },
    watch:{
       keyword(){
         
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(this.keyword.length==0){
      this.list=[]
      return
      }
      this.timer=setTimeout(() => {
        const result=[];
        for(let i in this.citydata){
          this.citydata[i].forEach(value=>{
            if(value.spell.indexOf(this.keyword) >-1||value.name.indexOf(this.keyword)>-1){
              result.push(value)
            }
          })
        }
        this.list=result
      }, 100);
       } 
         
         }
}
</script>

<style scoped>
  .title{
      text-align: center;
      background: #00bcd4;
      height: .86rem;
      line-height: .86rem;
      color:#fff;
      font-size: .32rem
  }.title .arrow-back{
    width: 0.54rem;
    height: .54rem;
    font-size: .4rem;
    float:left;
    margin-left: .1rem;
    color: #fff
    }
 .input{
   background:#00bcd4;
   text-align: center;
   margin-top: -0.02rem ;
   height: .62rem;
   width: 100%;
    padding: 0 .1rem;
    text-align: center;
 }
 .input .input-search {
   width: 95%;
   text-align: center;
   height: .52rem;
   line-height: .52rem;
   border-radius: 0.06rem;
   margin-right: .2rem ;
   color: #666
 }
 .input .search-content{
   position: absolute;
   top: 1.44rem;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 11;
   background-color: #fff;
 }
 
li {
    line-height: .54rem;
    padding-left: .2rem;
    border-bottom: .02rem solid #ccc
}
</style>