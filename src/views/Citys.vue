<template>
    <div>
        <city :citydata='citydata'></city>
        <city-list :citydata="citydata" :hotcity="hotcity" :message="message"></city-list>
        <alphabet :citydata="citydata" @change='handleIn'></alphabet>  
    </div>
</template>
<script>
import city from '../components/City'
import CityList from '../components/CiityList'
import Alphabet from '../components/Alphabet'
import axios from 'axios'
export default {
    name: 'Citys',
    components: {
        city,
        CityList,
        Alphabet,
        
    },
    data() {
        return {
            citydata: {},
            hotcity: [],
            message: ''
        }
    },
    methods: {
        getCityInfo() {
            axios.get('http://localhost:8080/static/mock/city.json').then(res => {
                let data = res.data
                if (data.ret && data.data) {
                    this.citydata = data.data.cities;
                    this.hotcity = data.data.hotCities
                }
            })
        },
        handleIn(letter) {
            this.message = letter
        }
    },
    mounted() {       
        this.getCityInfo()
      
    },
   
}
</script>
<style scoped>
</style>