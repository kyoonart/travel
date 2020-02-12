<template>
  <div>
   <home-header></home-header>
   <home-swiper :swiperList="swiperList"></home-swiper>
   <home-icons :iconsList="iconsList"></home-icons>
   <home-recommend></home-recommend>
  </div>
</template>

<script>
 import HomeHeader from  '../components/Header';
 import HomeSwiper from  '../components/Swiper';
 import HomeIcons from  '../components/Icons';
 import HomeRecommend from '../components/Recommend'
 import axios from 'axios'
 import { mapState } from 'vuex'
export default {
  name: 'Home', 
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data(){
  return {
    swiperList:[],
    iconsList:[],
    lastcity:'',
  }
  },
  computed:{
   ...mapState(['city'])
  },
  methods:{
  getHomeInfo(){
    axios.get('http://localhost:8080/static/mock/index.json?city=' + this.city).then(this.getHomeInfoSucc)
  },
  getHomeInfoSucc(res){
    res=res.data;
    if(res.ret&&res.data){
    const data=res.data;
    this.swiperList=data.swiperList
    this.iconsList=data.iconList
    }
  }
  },
  mounted(){
    this.getHomeInfo()
     this.lastcity=this.city
  },
 activated(){
 if(this.lastcity!==this.city){
      this.lastcity=this.city
       this.getHomeInfo()
 }
    }
}
</script>
<style lang="stylus" scoped>



</style>