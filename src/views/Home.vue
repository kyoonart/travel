<template>
  <div>
   <home-header :city='city'></home-header>
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
    city:'',
    swiperList:[],
    iconsList:[]
  }
  },
  methods:{
  getHomeInfo(){
    axios.get('http://localhost:8080/static/mock/index.json').then(this.getHomeInfoSucc)
  },
  getHomeInfoSucc(res){
    console.log(res);
    res=res.data;
    if(res.ret&&res.data){
    const data=res.data;
    this.city=data.city
    this.swiperList=data.swiperList
    this.iconsList=data.iconList
    }
  }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>



</style>